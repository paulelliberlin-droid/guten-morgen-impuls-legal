import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { getBevorzugteKategorien, setBevorzugteKategorien } from '../services/storage';
import { COLORS, FONTS, RADIUS, KATEGORIE_CONFIG } from '../theme';

const KATEGORIEN = [
  { key: 'huna',        ...KATEGORIE_CONFIG.huna },
  { key: 'charisma',    ...KATEGORIE_CONFIG.charisma },
  { key: 'achtsamkeit', ...KATEGORIE_CONFIG.achtsamkeit },
];

export default function KategorienScreen() {
  const [ausgewaehlt, setAusgewaehlt] = useState([]);

  useEffect(() => {
    getBevorzugteKategorien().then(setAusgewaehlt);
  }, []);

  function toggleKategorie(key) {
    setAusgewaehlt(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  }

  async function speichern() {
    await setBevorzugteKategorien(ausgewaehlt);
    const msg = ausgewaehlt.length === 0
      ? 'Du erhaeltst Impulse aus allen Kategorien.'
      : `Gespeichert: ${ausgewaehlt.map(k => KATEGORIE_CONFIG[k]?.label).join(', ')}`;
    Alert.alert('Gespeichert ✓', msg);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Deine Kategorien</Text>
        <Text style={styles.subtitle}>
          Waehle deine bevorzugten Themenbereiche.{'\n'}
          Ohne Auswahl erhaeltst du Impulse aus allen Kategorien.
        </Text>

        <View style={styles.liste}>
          {KATEGORIEN.map(kat => {
            const aktiv = ausgewaehlt.includes(kat.key);
            return (
              <TouchableOpacity
                key={kat.key}
                onPress={() => toggleKategorie(kat.key)}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={aktiv ? [kat.deep, kat.deep] : [COLORS.bgElement, COLORS.bgElement]}
                  style={[styles.karte, aktiv && { borderColor: kat.accent, borderWidth: 1.5 }]}
                >
                  {/* Linker Farbbalken */}
                  <View style={[styles.farbbalken, { backgroundColor: kat.accent }]} />

                  <View style={styles.karteInhalt}>
                    <Text style={styles.karteEmoji}>{kat.emoji}</Text>
                    <View style={styles.karteTexte}>
                      <Text style={[styles.karteLabel, aktiv && { color: COLORS.textPrimary }]}>
                        {kat.label}
                      </Text>
                      <Text style={styles.karteAnzahl}>20 Impulse</Text>
                    </View>
                  </View>

                  {aktiv && (
                    <View style={[styles.checkCircle, { backgroundColor: kat.accent }]}>
                      <Ionicons name="checkmark" size={14} color={COLORS.bg} />
                    </View>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>

        {ausgewaehlt.length === 0 && (
          <View style={styles.hinweisBox}>
            <Ionicons name="shuffle" size={16} color={COLORS.gold} />
            <Text style={styles.hinweisText}>Alle Kategorien aktiv — maximale Vielfalt</Text>
          </View>
        )}

        <TouchableOpacity style={styles.btnSpeichern} onPress={speichern} activeOpacity={0.85}>
          <Text style={styles.btnSpeichernText}>Auswahl speichern</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: COLORS.bg },
  content:        { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 48 },
  title:          { fontFamily: FONTS.serifBold, fontSize: 32, color: COLORS.textPrimary, marginBottom: 10 },
  subtitle:       { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.textSecondary, lineHeight: 22, marginBottom: 36 },

  liste:          { gap: 14, marginBottom: 24 },
  karte:          { flexDirection: 'row', alignItems: 'center', borderRadius: RADIUS.md, overflow: 'hidden', borderWidth: 1.5, borderColor: 'transparent' },
  farbbalken:     { width: 4, height: '100%', minHeight: 72 },
  karteInhalt:    { flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 20, gap: 14 },
  karteEmoji:     { fontSize: 28 },
  karteTexte:     { flex: 1 },
  karteLabel:     { fontFamily: FONTS.sansMedium, fontSize: 16, color: COLORS.textSecondary, marginBottom: 3 },
  karteAnzahl:    { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted },
  checkCircle:    { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginRight: 18 },

  hinweisBox:     { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 12, paddingHorizontal: 16, backgroundColor: COLORS.bgElement, borderRadius: RADIUS.md, marginBottom: 32 },
  hinweisText:    { fontFamily: FONTS.sans, fontSize: 13, color: COLORS.gold, flex: 1 },

  btnSpeichern:   { backgroundColor: COLORS.gold, paddingVertical: 16, borderRadius: RADIUS.md, alignItems: 'center' },
  btnSpeichernText:{ fontFamily: FONTS.sansBold, fontSize: 15, color: COLORS.bg },
});
