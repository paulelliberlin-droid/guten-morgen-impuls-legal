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
 * Waehlt einen zufaelligen Impuls aus der Liste aus,
 * der noch nicht als erledigt markiert wurde.
 */
export function getZufallsImpuls(impulse, erledigteIds = []) {
  const verfuegbar = impulse.filter(imp => !erledigteIds.includes(imp.id));

  // Fallback: wenn alle erledigt, nehme alle
  const pool = verfuegbar.length > 0 ? verfuegbar : impulse;

  const index = Math.floor(Math.random() * pool.length);
  return pool[index] || null;
}

export { CATEGORIES };
