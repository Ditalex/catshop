import { db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  { id: 'scratcher-001', title: 'Sisal Scratching Post', short: 'Poste rascador de sisal', description: 'Poste vertical de sisal resistente para afilar garras y estiramiento.', price: 29.99, stock: 20, image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=60' },
  { id: 'tree-002', title: 'Compact Cat Tree', short: 'Árbol para gatos compacto', description: 'Árbol multi-niveles con hamaca y cubículo para descanso.', price: 89.99, stock: 8, image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=900&q=60' },
  { id: 'toy-003', title: 'Interactive Laser Toy', short: 'Juguete láser interactivo', description: 'Juguete automático para estimular la caza y el ejercicio.', price: 24.5, stock: 35, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=60' },
  { id: 'bed-004', title: 'Plush Cat Bed', short: 'Cama suave y acogedora', description: 'Cama redonda con borde elevado para sensación de seguridad.', price: 34.0, stock: 14, image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=60' },
  { id: 'litter-005', title: 'High-sided Litter Box', short: 'Bandeja sanitaria alto contorno', description: 'Bandeja para contener arena y reducir derrames.', price: 19.99, stock: 40, image: 'https://images.unsplash.com/photo-1612197528188-0a3a0f0a8a0b?auto=format&fit=crop&w=900&q=60' },
  { id: 'feeder-006', title: 'Automatic Feeder', short: 'Comedero automático programable', description: 'Dispensador programable para comidas diarias.', price: 59.9, stock: 10, image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=60' },
  { id: 'brush-007', title: 'Slicker Grooming Brush', short: 'Cepillo para pelo suelto', description: 'Cepillo suave que ayuda a reducir bolas de pelo.', price: 12.5, stock: 50, image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=60' },
  { id: 'carrier-008', title: 'Portable Cat Carrier', short: 'Transportadora segura', description: 'Transportadora ligera con ventilación y cierre seguro.', price: 44.0, stock: 12, image: 'https://images.unsplash.com/photo-1583511655826-9b1b5b1a3b8b?auto=format&fit=crop&w=900&q=60' },
  { id: 'catnip-009', title: 'Organic Catnip Toy', short: 'Juguete con catnip orgánico', description: 'Pelota con catnip 100% natural para horas de juego.', price: 6.5, stock: 120, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=60' },
  { id: 'window-010', title: 'Window Perch', short: 'Hamaca para ventana', description: 'Percha para ventana, ideal para ver el exterior.', price: 39.99, stock: 18, image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=60' }
];

async function seed(){
  for(const p of products){
    try{
      await addDoc(collection(db,'products'), p);
      console.log('Agregado:', p.title);
    }catch(e){
      console.error('Error al agregar', p.title, e);
    }
  }
  console.log('✔ Seed completado');
}

seed();
