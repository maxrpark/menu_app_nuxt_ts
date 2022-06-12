import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import {
  TableInterface,
  Menu,
  OrderInterface,
  orderDetail,
} from '../ts/interfaces/globalInterfaces';
import { db } from '../firebase/config';

const useAddOrder = async (
  comida: Menu,
  table: TableInterface,
  amount: number,
  id: string
) => {
  const docRef = doc(db, 'tables', id);
  const tempItem = table.order.find((i: OrderInterface) => i.id === comida.id);
  if (tempItem) {
    const tempCart = table.order.map((item: OrderInterface) => {
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
    let orderItem: OrderInterface = {
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
  let sendOrder: orderDetail = {
    table_name: table.name,
    name: comida.name,
    isCompleted: false,
    amount: amount,
  };

  const colRef = collection(db, 'orders');
  await addDoc(colRef, sendOrder);
};
export default useAddOrder;
