// Zentrale Design-Konstanten fuer Guten Morgen Impuls

export const COLORS = {
  // Hintergruende
  bg:           '#0F0F1E',  // Tiefstes Dunkel
  bgCard:       '#1A1A2E',  // Karten-Hintergrund
  bgElement:    '#242438',  // Elemente / Inputs

  // Gold-Akzente
  gold:         '#C8A96E',
  goldLight:    '#E8C98E',
  goldDim:      '#7A6540',

  // Text
  textPrimary:  '#F0EAD6',  // Warmes Weiss
  textSecondary:'#9E9BAE',  // Gedaempft
  textMuted:    '#4A4860',  // Sehr gedaempft

  // Kategorien
  hunaDeep:     '#2E1F14',
  hunaAccent:   '#8B5E3C',
  charismaDeep: '#141428',
  charismaAccent:'#4A6FA5',
  achtsamDeep:  '#0F2A1E',
  achtsamAccent:'#3A8A5F',

  // Status
  success:      '#3A8A5F',
  border:       '#2A2A42',
};

export const FONTS = {
  serif:        'CormorantGaramond_400Regular',
  serifItalic:  'CormorantGaramond_400Regular_Italic',
  serifBold:    'CormorantGaramond_700Bold',
  sans:         'Inter_400Regular',
  sansMedium:   'Inter_500Medium',
  sansBold:     'Inter_700Bold',
};

export const RADIUS = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
};

export const KATEGORIE_CONFIG = {
  huna: {
    label: 'Huna Philosophie',
    emoji: '🌺',
    deep: '#2E1F14',
    accent: '#8B5E3C',
    gradient: ['#2E1F14', '#1A1A2E'],
  },
  charisma: {
    label: 'Charisma',
    emoji: '✨',
    deep: '#141428',
    accent: '#4A6FA5',
    gradient: ['#141428', '#1A1A2E'],
  },
  achtsamkeit: {
    label: 'Achtsamkeit',
    emoji: '🍃',
    deep: '#0F2A1E',
    accent: '#3A8A5F',
    gradient: ['#0F2A1E', '#1A1A2E'],
  },
};
