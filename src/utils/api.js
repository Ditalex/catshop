import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

export async function fetchProducts() {
  const col = collection(db, 'products');
  const snap = await getDocs(col);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchProductById(id) {
  const dRef = doc(db, 'products', id);
  const snap = await getDoc(dRef);
  if (!snap.exists()) throw new Error('Not found');
  return { id: snap.id, ...snap.data() };
}

export async function createOrder(orderData) {
  const col = collection(db, 'orders');
  const res = await addDoc(col, orderData);
  return res.id;
}
