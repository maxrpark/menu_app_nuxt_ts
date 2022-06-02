import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';

import { db } from '../firebase/config';

// const useAddOrder = (comida: any, tableID: any, amount: number, id: any) => {
const useAddOrder = async (
  comida: any,
  table: any,
  amount: number,
  id: any
) => {
  const docRef = doc(db, 'tables', id);
  const tempItem = table.order.find((i: any) => i.id === comida.id);
  if (tempItem) {
    const tempCart = table.order.map((item: any) => {
      if (item.id === comida.id) {
        item.amount += amount;
        item.total = item.price * item.amount;
        return item;
      }
      return item;
    });
    updateDoc(docRef, {
      order: tempCart,
    });
  } else {
    let orderItem = {
      id: comida.id,
      name: comida.name,
      price: comida.price,
      amount,
      total: comida.price * amount,
    };

    let sendOrder = {
      name: comida.name,
      isCompleted: false,
      amount: amount,
    };

    const colRef = collection(db, 'orders');
    await addDoc(colRef, sendOrder);
    await updateDoc(docRef, {
      order: [...table.order, orderItem],
    });
  }
};
export default useAddOrder;
