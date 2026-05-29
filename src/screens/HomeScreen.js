import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
  ActivityIndicator, Animated, ScrollView, StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { loadImpulse, getZufallsImpuls } from '../services/impulse';
import {
  getBevorzugteKategorien, getErledigteImpulse,
  addErledigterImpuls, darfNeuenImpulsLaden,
  setLetztenImpulsZeit, getVerbleibendeWartezeit,
  getZufallsprinzip,
} from '../services/storage';
import { COLORS, FONTS, RADIUS, KATEGORIE_CONFIG } from '../theme';

export default function HomeScreen() {
  const [impuls, setImpuls]         = useState(null);
  const [loading, setLoading]       = useState(true);
  const [erledigt, setErledigt]     = useState(false);
  const [gesperrt, setGesperrt]     = useState(false);
  const [warteSeconds, setWarteSeconds] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Countdown-Ticker: läuft jede Sekunde wenn gesperrt
  useEffect(() => {
    if (!gesperrt || warteSeconds <= 0) return;
    const timer = setTimeout(() => {
      setWarteSeconds(s => {
        if (s <= 1) { setGesperrt(false); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [gesperrt, warteSeconds]);

  useEffect(() => { ladeTagesImpuls(true); }, []);

  function animateIn() {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }

  const ladeTagesImpuls = useCallback(async (erstAufruf = false) => {
    // "Nächster Impuls"-Button: Rate-Limit prüfen BEVOR geladen wird
    if (!erstAufruf) {
      const darf = await darfNeuenImpulsLaden();
      if (!darf) {
        const ms = await getVerbleibendeWartezeit();
        setWarteSeconds(Math.ceil(ms / 1000));
        setGesperrt(true);
        return;
      }
    }
    try {
      setLoading(true);
      setGesperrt(false);
      const zufall       = await getZufallsprinzip();
      const kategorien   = zufall ? [] : await getBevorzugteKategorien();
      const erledigteIds = await getErledigteImpulse();
      const alle         = await loadImpulse(kategorien);
      if (!alle.length) { setImpuls(null); return; }
      const ausgewaehlter = getZufallsImpuls(alle, erledigteIds);
      setImpuls(ausgewaehlter);
      setErledigt(erledigteIds.includes(ausgewaehlter?.id));
      if (!erstAufruf) await setLetztenImpulsZeit();
    } catch {
      setImpuls(null);
    } finally {
      setLoading(false);
      animateIn();
    }
    // App-Öffnung: NACH dem Laden prüfen ob Sperre aus vorheriger Session noch gilt.
    // Impuls wird gezeigt, aber "Nächster"-Button bleibt gesperrt + Countdown läuft.
    if (erstAufruf) {
      const darf = await darfNeuenImpulsLaden();
      if (!darf) {
        const ms = await getVerbleibendeWartezeit();
        setWarteSeconds(Math.ceil(ms / 1000));
        setGesperrt(true);
      }
    }
  }, []);

  async function handleErledigt() {
    if (!impuls) return;
    await addErledigterImpuls(impuls.id);
    setErledigt(true);
  }

  function formatWartezeit(sek) {
    const m = Math.floor(sek / 60);
    const s = sek % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  const kat = impuls ? (KATEGORIE_CONFIG[impuls.kategorie] || KATEGORIE_CONFIG.achtsamkeit) : null;

  if (loading) {
    return (
      <View style={styles.center}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    );
  }

  if (!impuls) {
    return (
      <View style={styles.center}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.emptyEmoji}>🌅</Text>
        <Text style={styles.emptyTitle}>Keine Impulse</Text>
        <Text style={styles.emptyHint}>Bitte Verbindung pruefen oder Kategorien einstellen.</Text>
        <TouchableOpacity style={styles.reloadBtn} onPress={() => ladeTagesImpuls(true)}>
          <Text style={styles.reloadBtnText}>Erneut versuchen</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Hintergrund-Gradient je Kategorie */}
      <LinearGradient
        colors={[kat.deep, COLORS.bg, COLORS.bg]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.45, 1]}
      />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>Guten Morgen</Text>
          <View style={[styles.kategorieBadge, { backgroundColor: kat.deep, borderColor: kat.accent }]}>
            <Text style={styles.kategorieEmoji}>{kat.emoji}</Text>
            <Text style={[styles.kategorieLabel, { color: kat.accent }]}>{kat.label}</Text>
          </View>
        </View>

        {/* Bild */}
        <Animated.View style={[styles.bildContainer, { opacity: fadeAnim }]}>
          {impuls.bild_url ? (
            <Image source={{ uri: impuls.bild_url }} style={styles.bild} resizeMode="cover" />
          ) : (
            <LinearGradient colors={[kat.deep, kat.accent + '33']} style={styles.bildPlaceholder}>
              <Text style={styles.placeholderEmoji}>{kat.emoji}</Text>
            </LinearGradient>
          )}
        </Animated.View>

        {/* Impuls-Text */}
        <Animated.View style={[styles.textCard, { opacity: fadeAnim }]}>
          <Text style={styles.anführung}>"</Text>
          <Text style={styles.impulsText}>{impuls.text}</Text>
          <Text style={[styles.anführung, styles.anführungEnd]}>"</Text>
        </Animated.View>

        {/* Aktions-Buttons */}
        <View style={styles.buttons}>
          {!erledigt ? (
            <TouchableOpacity style={[styles.btnErledigt, { backgroundColor: kat.accent }]} onPress={handleErledigt} activeOpacity={0.8}>
              <Text style={styles.btnErledigtText}>✓  Heute umgesetzt</Text>
            </TouchableOpacity>
          ) : (
            <View style={[styles.erledigtBadge, { borderColor: kat.accent }]}>
              <Text style={[styles.erledigtText, { color: kat.accent }]}>✓  Heute umgesetzt</Text>
            </View>
          )}

          {gesperrt ? (
            <View style={styles.gesperrtBox}>
              <Text style={styles.gesperrtText}>⏱  Nächster Impuls in {formatWartezeit(warteSeconds)}</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.btnWeiter} onPress={() => ladeTagesImpuls(false)} activeOpacity={0.6}>
              <Text style={styles.btnWeiterText}>Naechster Impuls  →</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: COLORS.bg },
  center:         { flex: 1, backgroundColor: COLORS.bg, justifyContent: 'center', alignItems: 'center', padding: 32 },
  scroll:         { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 48 },

  header:         { marginBottom: 28 },
  appName:        { fontFamily: FONTS.serifItalic, fontSize: 16, color: COLORS.textMuted, marginBottom: 12, letterSpacing: 0.5 },
  kategorieBadge: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 7, borderRadius: RADIUS.xl, borderWidth: 1, gap: 6 },
  kategorieEmoji: { fontSize: 14 },
  kategorieLabel: { fontFamily: FONTS.sansMedium, fontSize: 13, letterSpacing: 0.5 },

  bildContainer:  { marginBottom: 28, borderRadius: RADIUS.lg, overflow: 'hidden' },
  bild:           { width: '100%', height: 220, borderRadius: RADIUS.lg },
  bildPlaceholder:{ height: 180, borderRadius: RADIUS.lg, justifyContent: 'center', alignItems: 'center' },
  placeholderEmoji:{ fontSize: 64 },

  textCard:       { marginBottom: 32, backgroundColor: '#1E1C30', borderRadius: RADIUS.lg, paddingHorizontal: 24, paddingTop: 8, paddingBottom: 20, borderWidth: 1.5, borderColor: 'rgba(200,169,110,0.55)' },
  anführung:      { fontFamily: FONTS.serifBold, fontSize: 72, color: COLORS.gold, opacity: 0.3, lineHeight: 60, marginBottom: -8 },
  anführungEnd:   { textAlign: 'right', marginTop: -24, marginBottom: 0 },
  impulsText:     { fontFamily: FONTS.serifItalic, fontSize: 22, lineHeight: 36, color: COLORS.textPrimary, textAlign: 'center', paddingHorizontal: 8 },

  buttons:        { gap: 12 },
  btnErledigt:    { paddingVertical: 16, borderRadius: RADIUS.md, alignItems: 'center' },
  btnErledigtText:{ fontFamily: FONTS.sansBold, fontSize: 15, color: COLORS.bg },
  erledigtBadge:  { paddingVertical: 15, borderRadius: RADIUS.md, alignItems: 'center', borderWidth: 1.5 },
  erledigtText:   { fontFamily: FONTS.sansBold, fontSize: 15 },
  btnWeiter:      { paddingVertical: 14, alignItems: 'center' },
  btnWeiterText:  { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.textMuted },
  gesperrtBox:    { paddingVertical: 14, alignItems: 'center' },
  gesperrtText:   { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.textMuted },

  emptyEmoji:     { fontSize: 52, marginBottom: 16 },
  emptyTitle:     { fontFamily: FONTS.serifBold, fontSize: 22, color: COLORS.textPrimary, marginBottom: 8 },
  emptyHint:      { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.textSecondary, textAlign: 'center', lineHeight: 22 },
  reloadBtn:      { marginTop: 24, paddingHorizontal: 28, paddingVertical: 12, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.gold },
  reloadBtnText:  { fontFamily: FONTS.sansMedium, fontSize: 14, color: COLORS.gold },
});
