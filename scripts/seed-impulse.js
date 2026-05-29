/**
 * Seed-Skript: 60 Impulse in Firebase Firestore eintragen
 * Ausfuehren mit: node scripts/seed-impulse.js
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBKFs236cD1I41d5SbYNus7tHFxxnvIGic",
  authDomain: "guten-morgen-impulse.firebaseapp.com",
  projectId: "guten-morgen-impulse",
  storageBucket: "guten-morgen-impulse.firebasestorage.app",
  messagingSenderId: "328220334423",
  appId: "1:328220334423:web:09db777b1757891a020612"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const impulse = [

  // ─── HUNA PHILOSOPHIE (20) ───────────────────────────────────────────────
  {
    text: "Ike: Die Welt ist das, was du denkst, dass sie ist. Welchen Gedanken moechtest du heute als Wahrheit waehlen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Kala: Es gibt keine Grenzen. Die einzigen Mauern, die dich aufhalten, hast du selbst errichtet — und du kannst sie wieder einreissen.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Makia: Energie fliesst dorthin, wo deine Aufmerksamkeit hingeht. Worauf richtest du heute deinen Fokus?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Manawa: Jetzt ist der Moment der Kraft. Nicht gestern, nicht morgen — dieser Atemzug ist dein Hebel.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Aloha: Lieben bedeutet, mit jemandem gluecklich zu sein. Wem gegenueber kannst du heute echtes Aloha zeigen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Mana: Alle Kraft kommt von innen. Du bist nicht abhaengig von aussen — du bist deine eigene Quelle.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Pono: Wirksamkeit ist das Mass der Wahrheit. Wenn etwas nicht funktioniert, aendere den Ansatz — nicht das Ziel.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Ha bedeutet Atem und Leben. Atme heute tief und bewusst — jeder Atemzug verbindet dich mit deiner Lebenskraft.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "In der Huna-Lehre hat jeder Mensch drei Seelen: den Koerper, den Verstand und das Hoehere Selbst. Hoere heute auf alle drei.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Alles ist lebendig und bewusst. Behandle heute alles, was dir begegnet, als haette es ein inneres Leben.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Vergebung befreit nicht den anderen — sie befreit dich. Was darfst du heute loslassen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Deine Gedanken sind Samen. Was du heute denkst, erntest du morgen. Pflanze bewusst.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Das hoehere Selbst kommuniziert durch Gefuehle. Welches Gefuehl moechte dir heute etwas sagen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Wie du die Welt siehst, so begegnet sie dir. Suche heute nach dem Guten — und du wirst es finden.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Heilung beginnt mit dem Bewusstsein. Wo in deinem Leben moechtest du heute mehr Bewusstheit einladen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Verbindung ist Kraft. Wer in deinem Leben staerkt dich — und wen staerkst du zurueck?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Jede Situation hat mehrere Deutungen. Waehle heute die, die dir Energie gibt statt nimmt.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Dein Koerper ist dein Partner, nicht dein Werkzeug. Wie kannst du ihn heute mit mehr Dankbarkeit behandeln?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Wenn du weisst, dass du weisst, ist das Wissen. Die tiefste Wahrheit fuehlt sich einfach an — nicht kompliziert.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Erschaffe deinen Tag bewusst: Stell dir vor, wie er verlaufen soll — bevor er beginnt.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },

  // ─── CHARISMA UEBUNGEN (20) ──────────────────────────────────────────────
  {
    text: "Uebung: Halte heute Blickkontakt eine Sekunde laenger als gewohnt. Diese eine Sekunde signalisiert Praesenz und Interesse.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Sprich heute einen Satz langsamer als noetig. Wer sich Zeit nimmt zu sprechen, signalisiert, dass sein Wort Gewicht hat.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Stelle heute jemandem eine echte Frage — und hoere wirklich zu, ohne waehrend des Zuhoerens an deine Antwort zu denken.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Steh oder sitz heute bewusst aufrecht. Haltung formt nicht nur wie andere dich wahrnehmen — sondern wie du dich selbst fuehlen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Nenne heute Menschen bei ihrem Namen. Der eigene Name ist der schoenste Klang fuer jeden Menschen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Laechle heute bewusst — nicht hoeflicherweise, sondern weil du gerade etwas Gutes denkst. Echter Ausdruck wirkt.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Mache heute einem Menschen ein konkretes, ehrliches Kompliment — nicht 'toll gemacht', sondern WAS genau beeindruckt dich.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Bevor du heute ein Gespraech beginnst, atme einmal tief durch. Wer praesent ankommt, zieht Aufmerksamkeit an.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Vermeide heute Fuellwoerter ('aehm', 'halt', 'irgendwie'). Stille zwischen Saetzen wirkt staerker als Luecken fuellen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Tritt heute durch eine Tuer ein als haettest du genau dort hingehoert. Deine Energie im Raum beginnt vor deinen Worten.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Wenn jemand spricht, nicke bewusst und zeige durch Mimik, dass du wirklich dabei bist. Praesenz ist der groesste Respekt.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Beantworte heute eine Frage mit einer kurzen Geschichte statt einer blossen Antwort. Menschen erinnern Geschichten, nicht Fakten.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Senke heute deine Stimme am Ende eines Satzes statt sie zu heben. Absinkende Stimme signalisiert Ueberzeugung.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Nimm dir heute 5 Minuten, um dir vorzustellen wie du in deiner besten Version auftrittst. Innere Bilder formen aeusseres Verhalten.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Sage heute 'Ich habe entschieden' statt 'Ich muss'. Sprache formt dein Selbstbild — und wie andere dich wahrnehmen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Wenn du heute kritisiert wirst, atme erst — dann antworte. Wer nicht sofort reagiert, wirkt souveraen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Stehe heute zu einer Meinung, auch wenn du alleine damit bist. Authentizitaet ist der Kern von Charisma.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Beobachte heute deine Handgesten beim Sprechen. Offene Handflaechen signalisieren Vertrauen und Offenheit.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Fasse heute ein Thema, das dich begeistert, in drei Saetzen zusammen. Begeisterung ist ansteckend — wenn sie klar ist.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Beginne heute ein Gespraech mit echter Neugier statt mit Small Talk. 'Was beschaeftigt dich gerade wirklich?' oeffnet Tueren.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },

  // ─── ACHTSAMKEITSTRAINING (20) ───────────────────────────────────────────
  {
    text: "Uebung: Trinke deinen ersten Schluck Kaffee oder Tee heute vollkommen bewusst — Temperatur, Geschmack, Geruch. Nur dieser Schluck.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Setze einen Timer auf 3 Minuten. Schliesse die Augen und zaehle nur deine Atemzuege. Wenn Gedanken kommen, zaehle einfach weiter.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Gehe heute 5 Minuten lang ausschliesslich mit Blick auf deine Schritte. Fuehle jeden Kontakt des Fusses mit dem Boden.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Bemerke heute dreimal bewusst deine Koerperhaltung — ohne sie sofort zu aendern. Erst bemerken, dann entscheiden.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "5-4-3-2-1: Benenne jetzt 5 Dinge die du siehst, 4 die du hoerst, 3 die du fuehlen kannst, 2 die du riechst, 1 das du schmeckst.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Iss heute eine Mahlzeit ohne Bildschirm und ohne Lesen. Nur essen — Farben, Texturen, Geschmack wahrnehmen.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Lege heute einmal bewusst alles ab, was du haeltst. Spuere fuer 30 Sekunden deine leeren Haende. Leere ist auch ein Gefuehl.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Boxatmung — 4 Sekunden einatmen, 4 halten, 4 ausatmen, 4 halten. Vier Runden. Der Koerper beruhigt sich sofort.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Schaue heute 2 Minuten lang aus dem Fenster — ohne Ziel, ohne Gedanken ordnen. Nur schauen, was sich bewegt.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Body-Scan in 60 Sekunden. Beginne bei den Fusssohlen, wandere langsam aufwaerts bis zum Scheitel. Wo spuerst du Spannung?",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Wenn du heute eine Tuer oeffnest, mache eine bewusste Pause davor. Ein Atemzug — und dann hindurch.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Schreibe heute drei Saetze ueber das, was du gerade wahrnimmst — nicht was du denkst oder fuehlen solltest, sondern was ist.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Bemerke heute einen Gedanken und sage dir innerlich: 'Ich habe gerade den Gedanken, dass...' Distanz zum Denken schafft Freiheit.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Waehle heute eine Routinetaetigkeit (Zaehneputzen, Haende waschen) und tue sie vollstaendig bewusst — wie zum ersten Mal.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Strecke dich heute morgen fuer 60 Sekunden so weit es geht — und spuere dabei jeden Muskel der sich dehnt.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Halte inne und frage dich: Was brauche ich gerade wirklich? Nicht was ich tun muss — sondern was mein Koerper und mein Geist jetzt brauchen.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Beobachte heute ein Gespraech, in dem du einfach nur zuhoerst — ohne zu urteilen, ohne zu planen was du sagst. Reines Zuhoeren.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Nimm heute eine Emotion wahr ohne sie sofort zu veraendern. Benenne sie: 'Ich bemerke Ungeduld.' Benennen loest den Druck.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Schreibe vor dem Schlafen drei Momente auf, in denen du heute wirklich present warst — egal wie kurz.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Uebung: Atme jetzt einmal tiefer als noetig, halte kurz an — und lass beim Ausatmen los, was du nicht beeinflussen kannst.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
];

async function seedImpulse() {
  console.log(`Starte: ${impulse.length} Impulse werden eingetragen...\n`);

  let erfolg = 0;
  let fehler = 0;

  for (const impuls of impulse) {
    try {
      const docRef = await addDoc(collection(db, 'impulse'), {
        ...impuls,
        erstellt_am: new Date(),
      });
      console.log(`✓ [${impuls.kategorie}] ${impuls.text.substring(0, 50)}...`);
      erfolg++;
    } catch (e) {
      console.error(`✗ Fehler: ${e.message}`);
      fehler++;
    }
  }

  console.log(`\n✅ Fertig! ${erfolg} Impulse eingetragen, ${fehler} Fehler.`);
  process.exit(0);
}

seedImpulse();
