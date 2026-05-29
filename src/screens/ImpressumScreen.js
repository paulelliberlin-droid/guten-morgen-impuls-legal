import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, StatusBar, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, RADIUS } from '../theme';
import { IMPRESSUM_ABSCHNITTE, IMPRESSUM_DATUM } from '../content/impressum';

export default function ImpressumScreen({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Impressum</Text>
            <Text style={styles.datum}>Stand: {IMPRESSUM_DATUM}</Text>
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
          <View style={styles.hinweisBox}>
            <Ionicons name="document-text-outline" size={20} color={COLORS.gold} />
            <Text style={styles.hinweisText}>
              Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV
            </Text>
          </View>

          {IMPRESSUM_ABSCHNITTE.map((abschnitt, i) => (
            <View key={i} style={styles.abschnitt}>
              <Text style={styles.abschnittTitel}>{abschnitt.titel}</Text>
              <Text style={styles.abschnittText}>{abschnitt.text}</Text>
            </View>
          ))}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Guten Morgen Impuls · paul.djazzy@tuta.com
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: COLORS.bg },

  header:          {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 24, paddingTop: 56, paddingBottom: 16,
    borderBottomWidth: 1, borderBottomColor: COLORS.border,
    backgroundColor: COLORS.bgCard,
  },
  title:           { fontFamily: FONTS.serifBold, fontSize: 26, color: COLORS.textPrimary },
  datum:           { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  closeBtn:        {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: COLORS.bgElement,
    justifyContent: 'center', alignItems: 'center',
  },

  scroll:          { flex: 1 },
  content:         { padding: 24, paddingBottom: 48 },

  hinweisBox:      {
    flexDirection: 'row', gap: 12, alignItems: 'flex-start',
    backgroundColor: COLORS.bgElement,
    borderRadius: RADIUS.md, padding: 16,
    marginBottom: 28, borderLeftWidth: 3, borderLeftColor: COLORS.gold,
  },
  hinweisText:     {
    flex: 1, fontFamily: FONTS.sans, fontSize: 14,
    color: COLORS.textSecondary, lineHeight: 22,
  },

  abschnitt:       { marginBottom: 28 },
  abschnittTitel:  {
    fontFamily: FONTS.sansBold, fontSize: 13,
    color: COLORS.gold, letterSpacing: 0.5,
    textTransform: 'uppercase', marginBottom: 10,
  },
  abschnittText:   {
    fontFamily: FONTS.sans, fontSize: 14,
    color: COLORS.textSecondary, lineHeight: 23,
  },

  footer:          {
    marginTop: 12, paddingTop: 20,
    borderTopWidth: 1, borderTopColor: COLORS.border,
    alignItems: 'center',
  },
  footerText:      { fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textMuted },
});
