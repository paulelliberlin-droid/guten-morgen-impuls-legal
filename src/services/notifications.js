import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Expo Go unterstuetzt seit SDK 53 keine Push-Notifications mehr.
// Im echten APK-Build (EAS Build) funktionieren sie normal.
const IS_EXPO_GO = Constants.appOwnership === 'expo';

/**
 * Initialisiert Notifications - nur im echten Build.
 */
export async function setupNotifications() {
  if (IS_EXPO_GO) return; // Expo Go: ueberspringen

  const N = require('expo-notifications');
  N.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

/**
 * Fragt Berechtigung fuer lokale Benachrichtigungen an.
 */
export async function requestNotificationPermission() {
  if (IS_EXPO_GO) {
    console.log('[DEV] Notifications nicht verfuegbar in Expo Go');
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
 * Plant eine taeglich wiederkehrende lokale Benachrichtigung.
 */
export async function planeTaglicheBenachrichtigung(stunden, minuten) {
  if (IS_EXPO_GO) {
    console.log(`[DEV] Benachrichtigung wuerde um ${stunden}:${String(minuten).padStart(2,'0')} geplant werden`);
    return;
  }

  try {
    const N = require('expo-notifications');
    await N.cancelAllScheduledNotificationsAsync();

    if (Platform.OS === 'android') {
      await N.setNotificationChannelAsync('impulse', {
        name: 'Tagesimpuls',
        importance: N.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
      });
    }

    await N.scheduleNotificationAsync({
      content: {
        title: 'Guten Morgen Impuls ✨',
        body: 'Dein taeglicher Impuls wartet auf dich.',
        sound: true,
      },
      trigger: {
        type: N.SchedulableTriggerInputTypes.DAILY,
        hour: stunden,
        minute: minuten,
      },
    });
  } catch (e) {
    console.warn('Benachrichtigung planen fehlgeschlagen:', e.message);
  }
}
