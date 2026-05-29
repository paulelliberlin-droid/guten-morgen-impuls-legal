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

export const DATENSCHUTZ_ABSCHNITTE = [
  {
    titel: '1. Verantwortlicher',
    text: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für die App „Guten Morgen Impuls" ist:\n\nPaul Ellinger\nE-Mail: paul.elli@tuta.com\n\nBei Fragen zum Datenschutz kannst du uns jederzeit unter dieser E-Mail-Adresse erreichen.`,
  },
  {
    titel: '2. Welche Daten werden verarbeitet?',
    text: `Diese App verarbeitet folgende Daten:\n\n• Gerätebezogene Benachrichtigungstoken (FCM-Token): Wird von Google Firebase Cloud Messaging erzeugt, um Push-Benachrichtigungen an dein Gerät zu senden. Der Token wird nicht dauerhaft auf unseren Servern gespeichert.\n\n• Inhalte der Impuls-Datenbank: Texte und Kategorien der Impulse werden aus Google Firebase Firestore geladen. Es werden keine personenbezogenen Daten in der Datenbank gespeichert.\n\n• Lokale App-Einstellungen: Deine Einstellungen (bevorzugte Kategorien, Benachrichtigungszeit, erledigte Impulse) werden ausschließlich lokal auf deinem Gerät gespeichert (AsyncStorage) und nicht an Server übertragen.`,
  },
  {
    titel: '3. Push-Benachrichtigungen',
    text: `Wenn du Push-Benachrichtigungen aktivierst, wird ein gerätespezifischer Token (FCM-Token) von Google Firebase Cloud Messaging erstellt. Dieser Token dient ausschließlich dazu, dir deinen täglichen Impuls zur gewünschten Uhrzeit zuzusenden.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst Push-Benachrichtigungen jederzeit in den Systemeinstellungen deines Geräts deaktivieren.`,
  },
  {
    titel: '4. Firebase / Google',
    text: `Diese App nutzt Firebase, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.\n\nFolgende Firebase-Dienste werden verwendet:\n\n• Firebase Firestore: Cloud-Datenbank zum Abrufen der Impuls-Inhalte.\n• Firebase Cloud Messaging (FCM): Versand von Push-Benachrichtigungen.\n\nBei der Nutzung dieser Dienste können Daten an Server von Google in den USA übertragen werden. Google hat sich den Standardvertragsklauseln der EU-Kommission unterworfen (Art. 46 Abs. 2 lit. c DSGVO).\n\nDatenschutzerklärung von Google: https://policies.google.com/privacy`,
  },
  {
    titel: '5. Lokale Datenspeicherung',
    text: `Deine persönlichen Einstellungen (gewählte Kategorien, Benachrichtigungsuhrzeit, Liste erledigter Impulse, zuletzt angezeigter Impuls) werden ausschließlich lokal auf deinem Gerät im App-eigenen Speicher (AsyncStorage) abgelegt.\n\nDiese Daten verlassen dein Gerät nicht und werden nicht an Dritte weitergegeben. Du kannst sie jederzeit durch Deinstallation der App vollständig löschen.`,
  },
  {
    titel: '6. Keine Weitergabe an Dritte',
    text: `Wir geben deine Daten nicht an Dritte weiter, soweit dies nicht für den Betrieb der App erforderlich ist (z. B. Firebase/Google als Auftragsverarbeiter gemäß Art. 28 DSGVO) oder wir gesetzlich dazu verpflichtet sind.`,
  },
  {
    titel: '7. Deine Rechte',
    text: `Du hast gemäß DSGVO folgende Rechte:\n\n• Auskunft (Art. 15 DSGVO): Du kannst Auskunft über die zu deiner Person gespeicherten Daten verlangen.\n• Berichtigung (Art. 16 DSGVO): Du kannst die Berichtigung unrichtiger Daten verlangen.\n• Löschung (Art. 17 DSGVO): Du kannst die Löschung deiner Daten verlangen.\n• Einschränkung (Art. 18 DSGVO): Du kannst die Einschränkung der Verarbeitung verlangen.\n• Widerspruch (Art. 21 DSGVO): Du kannst der Verarbeitung widersprechen.\n• Datenübertragbarkeit (Art. 20 DSGVO): Du kannst deine Daten in einem strukturierten Format erhalten.\n\nZur Ausübung deiner Rechte wende dich an: paul.elli@tuta.com\n\nDu hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.`,
  },
  {
    titel: '8. Datensicherheit',
    text: `Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um deine Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust oder unberechtigten Zugriff zu schützen. Die Verbindung zur Firebase-Datenbank erfolgt verschlüsselt über HTTPS/TLS.`,
  },
  {
    titel: '9. Kinder',
    text: `Diese App richtet sich nicht gezielt an Kinder unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern.`,
  },
  {
    titel: '10. Änderungen dieser Datenschutzerklärung',
    text: `Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, etwa bei Änderungen der App oder neuen gesetzlichen Anforderungen. Die jeweils aktuelle Version ist stets in der App abrufbar. Datum der letzten Änderung: ${DATENSCHUTZ_DATUM}.`,
  },
];

export const DATENSCHUTZ_INTRO =
  'Der Schutz deiner persönlichen Daten ist uns wichtig. ' +
  'Diese Datenschutzerklärung informiert dich darüber, welche Daten die App „Guten Morgen Impuls" erhebt, ' +
  'wie sie verwendet werden und welche Rechte du hast.';
