# Changelog — Guten Morgen Impuls

## [1.2.6] — 2026-06-14
### Verbesserungen
- Impulse wiederholen sich erst, wenn alle mindestens einmal angezeigt wurden (Round-Robin)
- Separate Tracking-Liste für angezeigte Impulse (unabhängig von "Heute umgesetzt")

## [1.2.5] — 2026-05-31
### Verbesserungen
- "Nächster Impuls" Button: sichtbarer als Button gestaltet (goldener Rand, hellerer Text)
- Tippfehler behoben: "Naechster" → "Nächster"
- Seed-Skript v3: 1 neuer Huna-Impuls + 13 neue Charisma-Impulse (aus Charisma-Training)

## [1.2.4] — 2026-05-30
### Bugfix
- Countdown läuft jetzt korrekt weiter, auch wenn die App im Hintergrund
  war oder geschlossen wurde. Berechnung erfolgt gegen die echte Uhrzeit
  (Date.now) statt durch Herunterzählen; AppState-Listener synchronisiert
  die Restzeit beim Zurückkehren in den Vordergrund.
- Countdown startet jetzt sofort nach „Nächster Impuls"

## [1.1.2] — 2026-05-29
### Bugfix
- Rate-Limit überlebt jetzt App-Neustart: Impuls wird angezeigt, aber
  Countdown läuft weiter und "Nächster Impuls" bleibt gesperrt

## [1.1.0] — 2026-05-29
### Verbesserungen
- Countdown läuft jetzt rückwärts in Echtzeit (MM:SS)
- Textfeld (Impuls-Karte) hat helleren, sichtbaren Hintergrund
- Einstellungen: neue Statistik-Übersicht (Heute / Woche / Monat / Gesamt)
- Kategorien: Info-Button mit Erklärung zu jeder Kategorie (Modal)

## [1.0.0] — 2026-05-29
### Erstveröffentlichung
- 62 Impulse in Firebase (Huna, Charisma, Achtsamkeit)
- HomeScreen: Impuls anzeigen, Erledigt-Button, Rate-Limit (1x/Stunde)
- KategorienScreen: Kategorien auswählen
- EinstellungenScreen: Uhrzeit + Zufallsprinzip-Toggle
- Design: Cormorant Garamond, Inter, Ionicons, Gradienten, Animationen
- Push-Notifications vorbereitet (funktionieren im echten Build)
- Admin-Interface (Web) zum Verwalten der Impulse
- APK-Build via EAS (preview)
