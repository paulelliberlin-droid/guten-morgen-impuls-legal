import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getBenachrichtigungszeit, setBenachrichtigungszeit, getZufallsprinzip, setZufallsprinzip, getErledigteStatistik } from '../services/storage';
import { planeTaglicheBenachrichtigung } from '../services/notifications';
import { COLORS, FONTS, RADIUS } from '../theme';

export default function EinstellungenScreen() {
  const [stunden, setStunden]         = useState(8);
  const [minuten, setMinuten]         = useState(0);
  const [gespeichertZeit, setGespeichertZeit] = useState('');
  const [zufall, setZufall]           = useState(true);
  const [gespeichert, setGespeichert] = useState(false);
  const [statistik, setStatistik]     = useState({ heute: 0, woche: 0, monat: 0, gesamt: 0 });

  useEffect(() => {
    getBenachrichtigungszeit().then(z => {
      const [h, m] = z.split(':').map(Number);
      setStunden(h); setMinuten(m); setGespeichertZeit(z);
    });
    getZufallsprinzip().then(setZufall);
    getErledigteStatistik().then(setStatistik);
  }, []);

  async function speichern() {
    const zeitStr = `${String(stunden).padStart(2, '0')}:${String(minuten).padStart(2, '0')}`;
    await setBenachrichtigungszeit(zeitStr);
    await setZufallsprinzip(zufall);
    await planeTaglicheBenachrichtigung(stunden, minuten);
    setGespeichertZeit(zeitStr);
    setGespeichert(true);
    setTimeout(() => setGespeichert(false), 2500);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Einstellungen</Text>

        {/* Uhrzeit-Sektion */}
        <View style={styles.sektion}>
          <View style={styles.sektionHeader}>
            <Ionicons name="alarm-outline" size={16} color={COLORS.gold} />
            <Text style={styles.sektionLabel}>TAGESZEIT</Text>
          </View>
          <Text style={styles.sektionHint}>Wann moechtest du deinen taeglichen Impuls erhalten?</Text>

          <View style={styles.zeitPicker}>
            <View style={styles.zeitSpalte}>
              <TouchableOpacity style={styles.pfeil} onPress={() => setStunden(h => (h + 1) % 24)}>
                <Ionicons name="chevron-up" size={22} color={COLORS.gold} />
              </TouchableOpacity>
              <Text style={styles.zeitZahl}>{String(stunden).padStart(2, '0')}</Text>
              <TouchableOpacity style={styles.pfeil} onPress={() => setStunden(h => (h - 1 + 24) % 24)}>
                <Ionicons name="chevron-down" size={22} color={COLORS.gold} />
              </TouchableOpacity>
            </View>

            <Text style={styles.doppelpunkt}>:</Text>

            <View style={styles.zeitSpalte}>
              <TouchableOpacity style={styles.pfeil} onPress={() => setMinuten(m => (m + 5) % 60)}>
                <Ionicons name="chevron-up" size={22} color={COLORS.gold} />
              </TouchableOpacity>
              <Text style={styles.zeitZahl}>{String(minuten).padStart(2, '0')}</Text>
              <TouchableOpacity style={styles.pfeil} onPress={() => setMinuten(m => (m - 5 + 60) % 60)}>
                <Ionicons name="chevron-down" size={22} color={COLORS.gold} />
              </TouchableOpacity>
            </View>
          </View>

          {gespeichertZeit ? (
            <Text style={styles.aktuelleZeit}>Aktuell aktiv: {gespeichertZeit} Uhr</Text>
          ) : null}
        </View>

        {/* Kategorie-Modus */}
        <View style={styles.sektion}>
          <View style={styles.sektionHeader}>
            <Ionicons name="shuffle-outline" size={16} color={COLORS.gold} />
            <Text style={styles.sektionLabel}>KATEGORIE-MODUS</Text>
          </View>
          <Text style={styles.sektionHint}>Wie soll die Kategorie ausgewaehlt werden?</Text>

          <View style={styles.toggleKarte}>
            <View style={styles.toggleLinks}>
              <Text style={styles.toggleTitel}>{zufall ? 'Zufaellige Kategorie' : 'Bevorzugte Kategorien'}</Text>
              <Text style={styles.toggleHint}>
                {zufall
                  ? 'Aus allen Kategorien'
                  : 'Nur aus deiner Auswahl im Tab "Kategorien"'}
              </Text>
            </View>
            <Switch
              value={zufall}
              onValueChange={setZufall}
              trackColor={{ false: COLORS.bgElement, true: COLORS.goldDim }}
              thumbColor={zufall ? COLORS.gold : COLORS.textMuted}
            />
          </View>
        </View>

        {/* Statistik-Sektion */}
        <View style={styles.sektion}>
          <View style={styles.sektionHeader}>
            <Ionicons name="bar-chart-outline" size={16} color={COLORS.gold} />
            <Text style={styles.sektionLabel}>DEINE FORTSCHRITTE</Text>
          </View>
          <Text style={styles.sektionHint}>Wie viele Impulse du umgesetzt hast:</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statKarte}>
              <Text style={styles.statZahl}>{statistik.heute}</Text>
              <Text style={styles.statLabel}>Heute</Text>
            </View>
            <View style={styles.statKarte}>
              <Text style={styles.statZahl}>{statistik.woche}</Text>
              <Text style={styles.statLabel}>Diese Woche</Text>
            </View>
            <View style={styles.statKarte}>
              <Text style={styles.statZahl}>{statistik.monat}</Text>
              <Text style={styles.statLabel}>Diesen Monat</Text>
            </View>
            <View style={[styles.statKarte, styles.statKarteGold]}>
              <Text style={[styles.statZahl, { color: COLORS.gold }]}>{statistik.gesamt}</Text>
              <Text style={styles.statLabel}>Insgesamt</Text>
            </View>
          </View>
        </View>

        {/* Speichern-Button */}
        <TouchableOpacity
          style={[styles.btnSpeichern, gespeichert && styles.btnGespeichert]}
          onPress={speichern}
          activeOpacity={0.85}
        >
          <Ionicons
            name={gespeichert ? 'checkmark-circle' : 'save-outline'}
            size={18}
            color={COLORS.bg}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.btnSpeichernText}>
            {gespeichert ? 'Gespeichert!' : 'Speichern & aktivieren'}
          </Text>
        </TouchableOpacity>

        {/* Info-Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={16} color={COLORS.textMuted} />
          <Text style={styles.infoText}>
            Benachrichtigungen funktionieren nur in der finalen App-Version, nicht in Expo Go.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: COLORS.bg },
  content:         { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 48 },
  title:           { fontFamily: FONTS.serifBold, fontSize: 32, color: COLORS.textPrimary, marginBottom: 36 },

  sektion:         { marginBottom: 36 },
  sektionHeader:   { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  sektionLabel:    { fontFamily: FONTS.sansMedium, fontSize: 11, color: COLORS.gold, letterSpacing: 1.5 },
  sektionHint:     { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.textSecondary, lineHeight: 22, marginBottom: 20 },

  zeitPicker:      { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.bgElement, borderRadius: RADIUS.lg, paddingVertical: 24, paddingHorizontal: 32, gap: 8 },
  zeitSpalte:      { alignItems: 'center', gap: 4 },
  pfeil:           { padding: 8 },
  zeitZahl:        { fontFamily: FONTS.serif, fontSize: 56, color: COLORS.textPrimary, letterSpacing: 2, minWidth: 80, textAlign: 'center' },
  doppelpunkt:     { fontFamily: FONTS.serif, fontSize: 48, color: COLORS.gold, marginBottom: 6, paddingHorizontal: 4 },
  aktuelleZeit:    { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted, textAlign: 'center', marginTop: 14 },

  toggleKarte:     { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.bgElement, borderRadius: RADIUS.md, padding: 18, gap: 12 },
  toggleLinks:     { flex: 1 },
  toggleTitel:     { fontFamily: FONTS.sansMedium, fontSize: 15, color: COLORS.textPrimary, marginBottom: 4 },
  toggleHint:      { fontFamily: FONTS.sans, fontSize: 13, color: COLORS.textSecondary, lineHeight: 18 },

  btnSpeichern:    { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.gold, paddingVertical: 16, borderRadius: RADIUS.md, marginBottom: 20 },
  btnGespeichert:  { backgroundColor: COLORS.success },
  btnSpeichernText:{ fontFamily: FONTS.sansBold, fontSize: 15, color: COLORS.bg },

  infoBox:         { flexDirection: 'row', alignItems: 'flex-start', gap: 10, padding: 16, backgroundColor: COLORS.bgElement, borderRadius: RADIUS.md },
  infoText:        { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted, flex: 1, lineHeight: 18 },

  statsGrid:       { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  statKarte:       { flex: 1, minWidth: '45%', backgroundColor: COLORS.bgElement, borderRadius: RADIUS.md, padding: 16, alignItems: 'center' },
  statKarteGold:   { borderWidth: 1, borderColor: COLORS.goldDim },
  statZahl:        { fontFamily: FONTS.serifBold, fontSize: 36, color: COLORS.textPrimary, lineHeight: 42 },
  statLabel:       { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textSecondary, marginTop: 4, textAlign: 'center' },
});
