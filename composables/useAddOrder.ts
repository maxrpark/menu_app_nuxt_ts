import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import getCollection from '../composables/getCollection';
// const useAddOrder = (comida: any, tableID: any, amount: number, id: any) => {
const useAddOrder = (comida: any, table: any, amount: number, id: any) => {
  // let { documents } = getCollection('tables', ['id', '==', tableID]);

  // console.log(documents._rawValue);

  // @ts-ignore: Unreachable code error
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
      comida: comida.name,
      price: comida.price,
      amount,
      total: comida.price * amount,
    };
    updateDoc(docRef, {
      order: [...table.order, orderItem],
    });
  }
};
export default useAddOrder;