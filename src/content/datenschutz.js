/**
 * DATENSCHUTZERKLÄRUNG — Guten Morgen Impuls
 *
 * Einzige Quelle für den Datenschutztext.
 * Wird sowohl in der App (DatenschutzScreen) als auch im PDF-Dokument verwendet.
 * Änderungen hier wirken sich automatisch auf beide Versionen aus.
 *
 * Zuletzt aktualisiert: Mai 2026
 */

export const DATENSCHUTZ_DATUM = 'Mai 2026';

export const DATENSCHUTZ_INTRO =
  'Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung ' +
  'informiert dich gemäß Art. 13 und 14 DSGVO darüber, welche Daten die App ' +
  '„Guten Morgen Impuls" verarbeitet, auf welcher Rechtsgrundlage, wie lange sie ' +
  'gespeichert werden und welche Rechte du hast.';

export const DATENSCHUTZ_ABSCHNITTE = [

  {
    titel: '1. Verantwortlicher',
    text:
      'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für die App ' +
      '„Guten Morgen Impuls" ist:\n\n' +
      'Paul Ellinger\n' +
      'E-Mail: paul.djazzy@tuta.com\n\n' +
      'Ein gesetzlich vorgeschriebener Datenschutzbeauftragter ist nicht bestellt, da die ' +
      'Voraussetzungen des Art. 37 DSGVO nicht erfüllt sind (keine umfangreiche ' +
      'Verarbeitung sensibler Daten, kein öffentlicher Träger).\n\n' +
      'Bei Fragen, Auskunftsersuchen oder der Ausübung deiner Rechte wende dich jederzeit ' +
      'per E-Mail an uns.',
  },

  {
    titel: '2. Grundsätze der Datenverarbeitung',
    text:
      'Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb der App ' +
      'erforderlich ist (Datensparsamkeit, Art. 5 Abs. 1 lit. c DSGVO). Wir betreiben:\n\n' +
      '• Kein Nutzertracking\n' +
      '• Keine Werbung oder Werbe-IDs\n' +
      '• Keine Analyse deines Nutzungsverhaltens\n' +
      '• Keine Profilerstellung\n' +
      '• Keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO\n' +
      '• Keine Weitergabe deiner Daten zu kommerziellen Zwecken',
  },

  {
    titel: '3. Übersicht der verarbeiteten Daten',
    text:
      'Die App verarbeitet folgende Datenkategorien:\n\n' +
      '① Lokale Gerätedaten (AsyncStorage)\n' +
      'Bevorzugte Kategorien, Benachrichtigungszeit, erledigte Impulse, ' +
      'zuletzt angezeigter Impuls, Statistik der umgesetzten Impulse.\n' +
      'Speicherort: ausschließlich auf deinem Gerät · Speicherdauer: bis zur Deinstallation der App\n\n' +
      '② FCM-Benachrichtigungstoken\n' +
      'Gerätebezogener Token für Push-Benachrichtigungen, erzeugt von Google Firebase.\n' +
      'Speicherort: Google-Server · Speicherdauer: wird automatisch erneuert; ' +
      'nach Deinstallation oder Deaktivierung der Benachrichtigungen nicht mehr verwendet\n\n' +
      '③ Impuls-Inhalte (Firestore)\n' +
      'Texte und Kategorien der Impulse werden aus der Cloud-Datenbank abgerufen. ' +
      'Es werden dabei keine personenbezogenen Daten übertragen oder gespeichert.\n' +
      'Speicherort: Google Firebase Firestore · Keine Speicherung personenbezogener Daten',
  },

  {
    titel: '4. Rechtsgrundlagen der Verarbeitung',
    text:
      'Jede Datenverarbeitung erfolgt auf einer der folgenden Rechtsgrundlagen:\n\n' +
      '• Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung): Abruf der Impuls-Inhalte ' +
      'aus Firebase Firestore, um die Kernfunktion der App bereitzustellen.\n\n' +
      '• Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Verarbeitung des FCM-Tokens und ' +
      'Versand von Push-Benachrichtigungen. Die Einwilligung erteilst du durch Aktivierung ' +
      'der Benachrichtigungen im Betriebssystem-Dialog.\n\n' +
      '• Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse): Lokale Speicherung deiner ' +
      'App-Einstellungen auf deinem Gerät zur Bereitstellung eines personalisierten ' +
      'Nutzungserlebnisses.',
  },

  {
    titel: '5. Push-Benachrichtigungen & Widerrufsrecht',
    text:
      'Wenn du Push-Benachrichtigungen aktivierst, wird durch Google Firebase Cloud ' +
      'Messaging (FCM) ein gerätespezifischer Token erzeugt. Dieser Token identifiziert ' +
      'dein Gerät für den Versand der täglichen Impuls-Benachrichtigung.\n\n' +
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)\n\n' +
      'Widerrufsrecht (Art. 7 Abs. 3 DSGVO): Du kannst deine Einwilligung jederzeit ' +
      'mit Wirkung für die Zukunft widerrufen, ohne dass dies die Rechtmäßigkeit der ' +
      'bisherigen Verarbeitung berührt. Den Widerruf kannst du jederzeit ausüben durch:\n\n' +
      '• Deaktivierung der App-Benachrichtigungen in den Systemeinstellungen deines Geräts\n' +
      '• Deinstallation der App\n\n' +
      'Nach dem Widerruf werden keine weiteren Push-Benachrichtigungen gesendet.',
  },

  {
    titel: '6. Firebase und Google als Auftragsverarbeiter',
    text:
      'Diese App nutzt Firebase, einen Dienst der Google Ireland Limited, Gordon House, ' +
      'Barrow Street, Dublin 4, Irland (nachfolgend „Google").\n\n' +
      'Google verarbeitet Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO. Ein ' +
      'Auftragsverarbeitungsvertrag (Data Processing Agreement) liegt gemäß den ' +
      'Firebase-Nutzungsbedingungen vor.\n\n' +
      'Genutzte Dienste:\n' +
      '• Firebase Firestore: Bereitstellung der Impuls-Datenbank\n' +
      '• Firebase Cloud Messaging (FCM): Versand von Push-Benachrichtigungen\n\n' +
      'Drittlandübertragung: Bei der Nutzung von Firebase können Daten in die USA ' +
      'übertragen werden. Google LLC ist gemäß dem EU-US Data Privacy Framework zertifiziert ' +
      '(Angemessenheitsbeschluss der EU-Kommission vom 10. Juli 2023, Art. 45 DSGVO). ' +
      'Zusätzlich sind EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) vereinbart.\n\n' +
      'Datenschutzerklärung Google: https://policies.google.com/privacy\n' +
      'Firebase-Datenschutz: https://firebase.google.com/support/privacy',
  },

  {
    titel: '7. Google Play Store',
    text:
      'Diese App wird über den Google Play Store vertrieben. Google LLC erhebt beim ' +
      'Download, der Installation und bei Aktualisierungen der App möglicherweise Daten ' +
      '(z. B. Installationsstatistiken, Geräteinformationen). Hierfür ist Google ' +
      'eigenverantwortlicher Verantwortlicher. Wir haben auf diese Datenerhebung ' +
      'keinen Einfluss.\n\n' +
      'Datenschutzerklärung Google Play: https://policies.google.com/privacy',
  },

  {
    titel: '8. App-Berechtigungen (Android)',
    text:
      'Die App fordert folgende Android-Berechtigungen an:\n\n' +
      '• INTERNET: Erforderlich zum Abrufen der Impuls-Inhalte aus Firebase Firestore ' +
      'und für Push-Benachrichtigungen über FCM.\n\n' +
      '• POST_NOTIFICATIONS (Android 13+): Erforderlich für die Anzeige von ' +
      'Push-Benachrichtigungen. Diese Berechtigung wird nur angefragt, wenn du ' +
      'Benachrichtigungen aktivierst, und kann jederzeit in den Geräteeinstellungen ' +
      'entzogen werden.\n\n' +
      'Die App fordert keine weiteren Berechtigungen an (kein Zugriff auf Kamera, ' +
      'Mikrofon, Standort, Kontakte oder Speicher).',
  },

  {
    titel: '9. Lokale Datenspeicherung',
    text:
      'Deine persönlichen App-Einstellungen werden ausschließlich lokal auf deinem ' +
      'Gerät im App-eigenen Speicher (React Native AsyncStorage) abgelegt:\n\n' +
      '• Bevorzugte Impuls-Kategorien\n' +
      '• Gewünschte Benachrichtigungszeit\n' +
      '• Liste der als „umgesetzt" markierten Impulse\n' +
      '• Verlauf umgesetzter Impulse mit Zeitstempel (für Statistik)\n' +
      '• Zuletzt angezeigter Impuls\n\n' +
      'Diese Daten verlassen dein Gerät nicht, werden nicht an Server übertragen und ' +
      'nicht mit Dritten geteilt. Speicherdauer: bis zur Deinstallation der App. ' +
      'Löschung: jederzeit durch Deinstallation oder Löschen der App-Daten in den ' +
      'Geräteeinstellungen.',
  },

  {
    titel: '10. Kein Tracking, keine Analyse, keine Werbung',
    text:
      'Diese App enthält ausdrücklich:\n\n' +
      '• Keine Analyse- oder Tracking-Tools (kein Google Analytics, kein Firebase Analytics, ' +
      'kein Crashlytics, kein Sentry o. ä.)\n' +
      '• Keine Werbebanner oder Werbenetzwerke\n' +
      '• Keine Werbe-IDs (Advertising Identifier)\n' +
      '• Keine Social-Media-Buttons oder -Plugins\n' +
      '• Keine Cookies oder vergleichbare Tracking-Technologien\n\n' +
      'Wir erhalten keinerlei Informationen darüber, wie du die App nutzt.',
  },

  {
    titel: '11. Deine Rechte als betroffene Person',
    text:
      'Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:\n\n' +
      '• Auskunft (Art. 15 DSGVO): Welche Daten wir über dich verarbeiten\n' +
      '• Berichtigung (Art. 16 DSGVO): Korrektur unrichtiger Daten\n' +
      '• Löschung (Art. 17 DSGVO): Löschung deiner Daten\n' +
      '• Einschränkung (Art. 18 DSGVO): Einschränkung der Verarbeitung\n' +
      '• Datenübertragbarkeit (Art. 20 DSGVO): Daten in maschinenlesbarem Format erhalten\n' +
      '• Widerruf (Art. 7 Abs. 3 DSGVO): Einwilligung jederzeit widerrufen\n\n' +
      '⚠ Widerspruchsrecht (Art. 21 DSGVO): Du hast das Recht, jederzeit aus Gründen, ' +
      'die sich aus deiner besonderen Situation ergeben, Widerspruch gegen die Verarbeitung ' +
      'deiner personenbezogenen Daten einzulegen, die auf Grundlage von Art. 6 Abs. 1 lit. f ' +
      'DSGVO (berechtigtes Interesse) erfolgt. Wir verarbeiten die Daten dann nicht mehr, ' +
      'es sei denn, wir können zwingende schutzwürdige Gründe nachweisen.\n\n' +
      'Zur Ausübung deiner Rechte: paul.djazzy@tuta.com',
  },

  {
    titel: '12. Beschwerderecht bei der Aufsichtsbehörde',
    text:
      'Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde über die ' +
      'Verarbeitung deiner personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).\n\n' +
      'Zuständige Aufsichtsbehörde für Deutschland:\n\n' +
      'Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)\n' +
      'Husarenstraße 30, 53117 Bonn\n' +
      'Tel.: +49 228 997799-0\n' +
      'E-Mail: poststelle@bfdi.bund.de\n' +
      'Web: https://www.bfdi.bund.de\n\n' +
      'Alternativ kannst du dich an die Datenschutzbehörde deines Bundeslandes wenden.',
  },

  {
    titel: '13. Datensicherheit',
    text:
      'Wir setzen technische und organisatorische Sicherheitsmaßnahmen gemäß Art. 32 DSGVO ein:\n\n' +
      '• Alle Verbindungen zu Firebase-Diensten erfolgen verschlüsselt über TLS/HTTPS\n' +
      '• Firebase-Zugangsdaten sind durch Firebase Security Rules geschützt\n' +
      '• Lokale Daten sind durch das Android-Sandbox-Modell vor dem Zugriff ' +
      'anderer Apps geschützt\n\n' +
      'Trotz dieser Maßnahmen kann keine absolute Sicherheit der Datenübertragung ' +
      'über das Internet garantiert werden.',
  },

  {
    titel: '14. Kinder und Jugendliche',
    text:
      'Diese App richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich ' +
      'keine personenbezogenen Daten von Kindern unter 16 Jahren. Solltest du Kenntnis ' +
      'davon erlangen, dass ein Kind unter 16 Jahren die App nutzt und dabei Daten ' +
      'verarbeitet werden, bitte informiere uns unter paul.djazzy@tuta.com, damit wir die ' +
      'notwendigen Maßnahmen ergreifen können.',
  },

  {
    titel: '15. Änderungen dieser Datenschutzerklärung',
    text:
      'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen (z. B. bei ' +
      'neuen App-Funktionen, Änderungen der eingesetzten Dienste oder neuen gesetzlichen ' +
      'Anforderungen).\n\n' +
      'Bei wesentlichen Änderungen werden wir dich durch einen Hinweis in der App ' +
      'informieren. Die jeweils aktuelle Version ist stets in der App unter ' +
      'Einstellungen → Datenschutzerklärung abrufbar sowie auf Anfrage per E-Mail ' +
      'erhältlich.\n\n' +
      'Datum der letzten Änderung: ' + 'Mai 2026',
  },

];
