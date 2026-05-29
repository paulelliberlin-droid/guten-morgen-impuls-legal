import Constants from 'expo-constants';
import { Platform } from 'react-native';

// HINWEIS: Lokale Benachrichtigungen (scheduleNotificationAsync) funktionieren
// NICHT in Expo Go ab SDK 53+. Das ist ein bekanntes Expo-Problem.
// Im echten APK-Build (via EAS Build) funktionieren sie vollstaendig.
// Ref: https://docs.expo.dev/versions/latest/sdk/notifications/
const IS_EXPO_GO = Constants.appOwnership === 'expo';

/**
 * Initialisiert den Notification-Handler – nur im echten APK-Build.
 * Muss beim App-Start einmal aufgerufen werden (z. B. in App.js).
 */
export async function setupNotifications() {
  if (IS_EXPO_GO) {
    console.log('[DEV] Notifications nicht verfuegbar in Expo Go (SDK 53+). APK-Build verwenden.');
    return;
  }

  try {
    const N = require('expo-notifications');
    N.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  } catch (e) {
    console.warn('setupNotifications Fehler:', e.message);
  }
}

/**
 * Fragt Berechtigung fuer lokale Benachrichtigungen an.
 * Gibt true zurueck, wenn Berechtigung erteilt wurde.
 */
export async function requestNotificationPermission() {
  if (IS_EXPO_GO) {
    console.log('[DEV] Notification-Berechtigung nicht verfuegbar in Expo Go.');
    return false;
  }

  try {
    const N = require('expo-notifications');
    const { status: existing } = await N.getPermissionsAsync();
    if (existing === 'granted') return true;
    const { status } = await N.requestPermissionsAsync();
    return status === 'granted';
  } catch (e) {
    console.warn('Notification Permission Fehler:', e.message);
    return false;
  }
}

/**
 * Plant eine taeglich wiederkehrende lokale Benachrichtigung zur angegebenen Uhrzeit.
 *
 * Verwendet expo-notifications scheduleNotificationAsync mit CalendarTrigger (DAILY).
 * Die Benachrichtigung laeuft nativ im Hintergrund – die App muss NICHT geoeffnet sein.
 *
 * Vor dem Planen werden alle bestehenden Benachrichtigungen gecancelt, damit
 * keine Duplikate entstehen wenn der Nutzer die Uhrzeit aendert.
 *
 * HINWEIS: Funktioniert NUR im APK-Build, nicht in Expo Go (SDK 53+ Einschraenkung).
 *
 * @param {number} stunden - Stunde (0-23)
 * @param {number} minuten - Minute (0-59)
 */
export async function planeTaglicheBenachrichtigung(stunden, minuten) {
  if (IS_EXPO_GO) {
    console.log(`[DEV] Benachrichtigung wuerde geplant um ${String(stunden).padStart(2, '0')}:${String(minuten).padStart(2, '0')} Uhr (nur im APK-Build aktiv)`);
    return;
  }

  try {
    const N = require('expo-notifications');

    // Alle bestehenden Benachrichtigungen canceln (verhindert Duplikate bei Uhrzeitwechsel)
    await N.cancelAllScheduledNotificationsAsync();

    // Android: Notification-Channel anlegen (erforderlich fuer Android 8+)
    if (Platform.OS === 'android') {
      await N.setNotificationChannelAsync('impulse', {
        name: 'Tagesimpuls',
        description: 'Taeglich Guten Morgen Impuls Benachrichtigung',
        importance: N.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#E6C87A',
        sound: 'default',
      });
    }

    // Taeglich wiederkehrende Benachrichtigung planen (laeuft nativ, App muss nicht offen sein)
    const id = await N.scheduleNotificationAsync({
      content: {
        title: 'Guten Morgen Impuls ✨',
        body: 'Dein taeglicher Impuls wartet auf dich.',
        sound: 'default',
        ...(Platform.OS === 'android' && { channelId: 'impulse' }),
      },
      trigger: {
        type: N.SchedulableTriggerInputTypes.DAILY,
        hour: stunden,
        minute: minuten,
      },
    });

    console.log(`[Notifications] Tagesimpuls geplant: ${String(stunden).padStart(2, '0')}:${String(minuten).padStart(2, '0')} Uhr (ID: ${id})`);
  } catch (e) {
    console.warn('Benachrichtigung planen fehlgeschlagen:', e.message);
  }
}

/**
 * Cancelt alle geplanten Benachrichtigungen.
 * Nuetzlich z. B. wenn der Nutzer Notifications deaktivieren moechte.
 */
export async function cancelAlleNotifications() {
  if (IS_EXPO_GO) return;

  try {
    const N = require('expo-notifications');
    await N.cancelAllScheduledNotificationsAsync();
    console.log('[Notifications] Alle geplanten Benachrichtigungen gecancelt.');
  } catch (e) {
    console.warn('cancelAlleNotifications Fehler:', e.message);
  }
}
