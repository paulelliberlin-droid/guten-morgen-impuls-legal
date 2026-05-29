import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  BENACHRICHTIGUNGSZEIT: 'benachrichtigungszeit',
  BEVORZUGTE_KATEGORIEN: 'bevorzugte_kategorien',
  ERLEDIGTE_IMPULSE: 'erledigte_impulse',
  LETZTER_IMPULS_ZEIT: 'letzter_impuls_zeit',
  ZUFALLSPRINZIP: 'zufallsprinzip',
};

// --- Benachrichtigungszeit ---

export async function getBenachrichtigungszeit() {
  const value = await AsyncStorage.getItem(KEYS.BENACHRICHTIGUNGSZEIT);
  return value || '08:00';
}

export async function setBenachrichtigungszeit(zeit) {
  await AsyncStorage.setItem(KEYS.BENACHRICHTIGUNGSZEIT, zeit);
}

// --- Bevorzugte Kategorien ---

export async function getBevorzugteKategorien() {
  const value = await AsyncStorage.getItem(KEYS.BEVORZUGTE_KATEGORIEN);
  return value ? JSON.parse(value) : [];
}

export async function setBevorzugteKategorien(kategorien) {
  await AsyncStorage.setItem(KEYS.BEVORZUGTE_KATEGORIEN, JSON.stringify(kategorien));
}

// --- Erledigte Impulse ---

export async function getErledigteImpulse() {
  const value = await AsyncStorage.getItem(KEYS.ERLEDIGTE_IMPULSE);
  return value ? JSON.parse(value) : [];
}

export async function addErledigterImpuls(impulsId) {
  const current = await getErledigteImpulse();
  if (!current.includes(impulsId)) {
    const updated = [...current, impulsId];
    await AsyncStorage.setItem(KEYS.ERLEDIGTE_IMPULSE, JSON.stringify(updated));
  }
}

export async function resetErledigteImpulse() {
  await AsyncStorage.removeItem(KEYS.ERLEDIGTE_IMPULSE);
}

// --- Rate-Limiting: letzter Impuls-Abruf ---

const RATE_LIMIT_MS = 60 * 60 * 1000; // 1 Stunde

export async function getLetztenImpulsZeit() {
  const value = await AsyncStorage.getItem(KEYS.LETZTER_IMPULS_ZEIT);
  return value ? parseInt(value, 10) : null;
}

export async function setLetztenImpulsZeit() {
  await AsyncStorage.setItem(KEYS.LETZTER_IMPULS_ZEIT, String(Date.now()));
}

export async function darfNeuenImpulsLaden() {
  const letzteZeit = await getLetztenImpulsZeit();
  if (!letzteZeit) return true;
  return Date.now() - letzteZeit >= RATE_LIMIT_MS;
}

export async function getVerbleibendeWartezeit() {
  const letzteZeit = await getLetztenImpulsZeit();
  if (!letzteZeit) return 0;
  const vergangen = Date.now() - letzteZeit;
  const verbleibend = RATE_LIMIT_MS - vergangen;
  return verbleibend > 0 ? verbleibend : 0;
}

// --- Zufallsprinzip (true) oder Kategorie fest (false) ---

export async function getZufallsprinzip() {
  const value = await AsyncStorage.getItem(KEYS.ZUFALLSPRINZIP);
  return value === null ? true : value === 'true'; // Standard: Zufall
}

export async function setZufallsprinzip(aktiv) {
  await AsyncStorage.setItem(KEYS.ZUFALLSPRINZIP, String(aktiv));
}
