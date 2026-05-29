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
    beschreibung:
      'Die Huna-Philosophie stammt aus Hawaii und beruht auf 7 Prinzipien für ein bewusstes Leben — von "Ike" (Die Welt ist, was du denkst) bis "Pono" (Wirksamkeit ist Wahrheit). Sie lehrt, wie du deine innere Kraft entfaltest, Grenzen überwindest und in Harmonie mit dir und der Welt lebst.',
  },
  charisma: {
    label: 'Charisma',
    emoji: '✨',
    deep: '#141428',
    accent: '#4A6FA5',
    gradient: ['#141428', '#1A1A2E'],
    beschreibung:
      'Charisma ist die Fähigkeit, andere Menschen durch deine Präsenz zu inspirieren und anzuziehen. Diese Impulse stärken deine Ausstrahlung, dein Selbstbewusstsein und deine Wirkung in Gesprächen — damit du authentisch überzeugst, ohne dich zu verstellen.',
  },
  achtsamkeit: {
    label: 'Achtsamkeit',
    emoji: '🍃',
    deep: '#0F2A1E',
    accent: '#3A8A5F',
    gradient: ['#0F2A1E', '#1A1A2E'],
    beschreibung:
      'Achtsamkeit bedeutet, vollständig im gegenwärtigen Moment zu sein — ohne Urteil, ohne Ablenkung. Diese Impulse helfen dir, innere Ruhe zu finden, Stress bewusst loszulassen und deinen Alltag mit mehr Tiefe und Dankbarkeit zu erleben.',
  },
};
