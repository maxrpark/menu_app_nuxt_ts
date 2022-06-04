import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';

import { db } from '../firebase/config';

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
    await updateDoc(docRef, {
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

    await updateDoc(docRef, {
      order: [...table.order, orderItem],
    });
  }
  let sendOrder = {
    table_name: table.name,
    name: comida.name,
    isCompleted: false,
    amount: amount,
  };

  console.log(sendOrder);

  const colRef = collection(db, 'orders');
  await addDoc(colRef, sendOrder);
};
export default useAddOrder;
