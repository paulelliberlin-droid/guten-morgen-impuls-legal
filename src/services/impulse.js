import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

const CATEGORIES = ['huna', 'charisma', 'achtsamkeit'];

/**
 * Laedt alle aktiven Impulse aus Firebase.
 * Optional gefiltert nach Kategorie(n).
 */
export async function loadImpulse(kategorien = []) {
  const impulseRef = collection(db, 'impulse');

  let q;
  if (kategorien.length > 0) {
    q = query(impulseRef, where('aktiv', '==', true), where('kategorie', 'in', kategorien));
  } else {
    q = query(impulseRef, where('aktiv', '==', true));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * Waehlt einen zufaelligen Impuls aus, der in dieser Runde noch nicht gezeigt wurde.
 * Erst wenn alle Impulse mindestens einmal gezeigt wurden, beginnt eine neue Runde.
 */
export function getZufallsImpuls(impulse, gezeigte = []) {
  const ungesehen = impulse.filter(imp => !gezeigte.includes(imp.id));

  // Neue Runde: alle wurden schon gezeigt → alle wieder verfuegbar
  const pool = ungesehen.length > 0 ? ungesehen : impulse;

  const index = Math.floor(Math.random() * pool.length);
  return pool[index] || null;
}

export { CATEGORIES };
