import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, StatusBar, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, RADIUS } from '../theme';
import { DATENSCHUTZ_ABSCHNITTE, DATENSCHUTZ_INTRO, DATENSCHUTZ_DATUM } from '../content/datenschutz';

export default function DatenschutzScreen({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Datenschutz</Text>
            <Text style={styles.datum}>Stand: {DATENSCHUTZ_DATUM}</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={22} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Intro */}
          <View style={styles.introBox}>
            <Ionicons name="shield-checkmark-outline" size={20} color={COLORS.gold} />
            <Text style={styles.introText}>{DATENSCHUTZ_INTRO}</Text>
          </View>

          {/* Abschnitte */}
          {DATENSCHUTZ_ABSCHNITTE.map((abschnitt, i) => (
            <View key={i} style={styles.abschnitt}>
              <Text style={styles.abschnittTitel}>{abschnitt.titel}</Text>
              <Text style={styles.abschnittText}>{abschnitt.text}</Text>
            </View>
          ))}

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Guten Morgen Impuls · paul.elli@tuta.com
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: COLORS.bg },

  header:         {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 24, paddingTop: 56, paddingBottom: 16,
    borderBottomWidth: 1, borderBottomColor: COLORS.border,
    backgroundColor: COLORS.bgCard,
  },
  title:          { fontFamily: FONTS.serifBold, fontSize: 26, color: COLORS.textPrimary },
  datum:          { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  closeBtn:       {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: COLORS.bgElement,
    justifyContent: 'center', alignItems: 'center',
  },

  scroll:         { flex: 1 },
  content:        { padding: 24, paddingBottom: 48 },

  introBox:       {
    flexDirection: 'row', gap: 12,
    backgroundColor: COLORS.bgElement,
    borderRadius: RADIUS.md, padding: 16,
    marginBottom: 28, borderLeftWidth: 3, borderLeftColor: COLORS.gold,
  },
  introText:      {
    flex: 1, fontFamily: FONTS.sans, fontSize: 14,
    color: COLORS.textSecondary, lineHeight: 22,
  },

  abschnitt:      { marginBottom: 28 },
  abschnittTitel: {
    fontFamily: FONTS.sansBold, fontSize: 13,
    color: COLORS.gold, letterSpacing: 0.5,
    textTransform: 'uppercase', marginBottom: 10,
  },
  abschnittText:  {
    fontFamily: FONTS.sans, fontSize: 14,
    color: COLORS.textSecondary, lineHeight: 23,
  },

  footer:         {
    marginTop: 12, paddingTop: 20,
    borderTopWidth: 1, borderTopColor: COLORS.border,
    alignItems: 'center',
  },
  footerText:     { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted },
});
