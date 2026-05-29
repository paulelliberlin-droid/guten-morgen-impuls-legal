/**
 * Seed-Skript v2: 30 neue Impulse in Firebase Firestore eintragen
 * Ausfuehren mit: node scripts/seed-impulse-v2.js
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

const neueImpulse = [

  // ─── HUNA PHILOSOPHIE (10) ────────────────────────────────────────────────
  {
    text: "Ike: Du siehst die Welt nicht wie sie ist — du siehst sie wie du bist. Welche innere Überzeugung färbt heute deinen Blick auf die Dinge?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Kala: Vergebung ist kein Geschenk für den anderen — sie ist die Befreiung deiner eigenen Energie. Wen oder was kannst du heute loslassen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Makia: Was du heute ignorierst, verliert Kraft. Was du heute bewusst betrachtest, wächst. Wohin lenkst du deine Aufmerksamkeit mit Absicht?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Manawa: Jede Entschuldigung, warum es nicht jetzt geht, ist eine Illusion. Der einzige Atemzug, in dem du handeln kannst, ist dieser hier.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Aloha: Geh heute jemandem mit echter Freude entgegen — nicht aus Höflichkeit, sondern aus ehrlichem Herzen. Aloha ist keine Geste, es ist ein Zustand.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Mana: Deine innere Kraft wird nicht durch andere vergeben. Sie gehört dir von Geburt an. Was hält dich davon ab, sie heute vollständig zu beanspruchen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Pono: Wenn eine Beziehung sich falsch anfühlt, liegt es selten nur am anderen. Wo bist du selbst aus dem Gleichgewicht geraten?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Die höhere Intelligenz in dir — dein Aumakua — kennt den Weg bereits. Nimm dir heute einen Moment der Stille und höre auf die leise Stimme, die schon immer wusste, was richtig ist.",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "In der Huna-Tradition ist jedes Problem ein unerlöster Knoten in deiner Energie. Welchen Knoten möchtest du heute mit Aloha und Vergebung auflösen?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },
  {
    text: "Du bist gleichzeitig Körper, Geist und höheres Selbst. Welcher dieser drei Bereiche braucht heute deine besondere Aufmerksamkeit und Fürsorge?",
    kategorie: "huna", aktiv: true, bild_url: ""
  },

  // ─── CHARISMA (10) ────────────────────────────────────────────────────────
  {
    text: "Charisma beginnt nicht im Raum — es beginnt in dem Moment, bevor du ihn betrittst. Wie bereitest du dich innerlich vor, bevor du auf andere Menschen triffst?",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Menschen erinnern sich selten daran, was du gesagt hast. Aber sie erinnern sich immer daran, wie sie sich in deiner Gegenwart gefühlt haben. Was hinterlässt du heute?",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Echter Augenkontakt ist eine der seltensten Gaben, die du jemandem geben kannst. Schau heute einen Menschen wirklich an — nicht durch ihn hindurch.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Wer nicht widersprechen kann, wirkt nicht überzeugend. Charisma bedeutet auch, einen klaren Standpunkt zu vertreten — ruhig, bestimmt, ohne Entschuldigung.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Deine Stimme ist dein mächtigstes Werkzeug. Sprich heute bewusst langsamer als nötig. Du wirst merken: Stille zwischen Worten gibt ihnen Gewicht.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Charismatische Menschen stellen bessere Fragen als andere. Frag heute jemanden etwas, das ihn wirklich zum Nachdenken bringt — und höre dann vollständig zu.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Unsicherheit macht sich im Körper bemerkbar, bevor du ein Wort sagst. Steh heute einmal aufrecht, atme tief, nimm Raum ein — und beobachte wie sich dein Inneres verändert.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Das größte Kompliment, das du jemandem machen kannst: ihn ernst nehmen. Höre heute zu, ohne das Gespräch zu dir zurückzulenken.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Authentizität schlägt Perfektion immer. Teile heute etwas Echtes von dir mit — eine ehrliche Meinung, eine echte Emotion. Menschen folgen dem Wahrhaftigen.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },
  {
    text: "Dein Name für andere ist Musik. Nutze heute bewusst den Namen deines Gegenübers im Gespräch — es öffnet Herzen auf eine Weise, die kaum etwas anderes kann.",
    kategorie: "charisma", aktiv: true, bild_url: ""
  },

  // ─── ACHTSAMKEIT (10) ────────────────────────────────────────────────────
  {
    text: "Trink deinen Morgenkaffee oder Tee heute ohne Bildschirm. Nur du, das warme Glas in deinen Händen und dieser einen Moment. Nichts sonst.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Stress entsteht oft nicht durch das, was passiert — sondern durch die Geschichte, die wir uns darüber erzählen. Welche Geschichte kannst du heute umschreiben?",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Drei Mal tief einatmen, drei Mal langsam ausatmen. Das Nervensystem hört sofort zu. Du kannst diesen Reset in jedem Moment deines Tages nutzen.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Was, wenn dieser Tag — genau so wie er ist — genug wäre? Nicht perfekt. Nicht aufregend. Einfach genug. Lass diesen Gedanken heute einmal wirklich zu dir sprechen.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Geh heute fünf Minuten nach draußen, ohne Ziel. Kein Podcast, kein Telefon. Nur gehen, schauen, fühlen. Der Boden trägt dich — vertraue ihm.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Dein Körper sendet den ganzen Tag Signale — Hunger, Müdigkeit, Anspannung. Wie oft überhörst du ihn? Mach heute einmal innezuhalten und wirklich hinzuhören.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Vergleiche dich heute mit niemandem. Nicht auf Social Media, nicht im Büro, nicht im Kopf. Du bist auf deinem eigenen Weg, in deinem eigenen Tempo.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Schreibe heute Abend drei Dinge auf, die heute da waren — ohne dass du sie verdient hättest. Sonnenlicht. Ein Lächeln. Ein Moment der Ruhe. Dankbarkeit ist trainierbar.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Achtsamkeit ist nicht Meditation auf einem Kissen. Sie ist der Moment, in dem du beim Geschirrspülen merkst: Ich spüle gerade Geschirr. Vollständig präsent. Das reicht.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },
  {
    text: "Was liebst du an dir selbst — nicht trotz deiner Fehler, sondern einschließlich davon? Nenne heute einen Zug deiner Persönlichkeit, der echt ist, auch wenn er unbequem ist.",
    kategorie: "achtsamkeit", aktiv: true, bild_url: ""
  },

];

async function main() {
  console.log(`Trage ${neueImpulse.length} neue Impulse ein...`);
  let count = 0;
  for (const impuls of neueImpulse) {
    await addDoc(collection(db, 'impulse'), impuls);
    count++;
    console.log(`  [${count}/${neueImpulse.length}] ${impuls.kategorie}: ${impuls.text.slice(0, 60)}...`);
  }
  console.log(`\nFertig! ${count} Impulse eingetragen.`);
  process.exit(0);
}

main().catch(e => { console.error('Fehler:', e.message); process.exit(1); });
