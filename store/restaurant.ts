import { defineStore } from 'pinia';
import getCollection from '../composables/getCollection';
import { updateDoc, doc } from 'firebase/firestore';
import { TableInterface } from '../ts/interfaces/globalInterfaces';
import { db } from '../firebase/config';
export const useRestaurantStore = defineStore({
  id: 'restaurant-store',
  state: () => {
    return {
      tables: [] as TableInterface[],
      max: 'max',
      custumerTable: {} as TableInterface,
      menu: [] as any,
    };
  },
  actions: {
    fetch() {
      const data = $fetch(`http://localhost:8888/api/products/`).then(
        (res: any) => {
          this.menu = res;
        }
      );
    },
    async setTables() {
      try {
        const { documents } = await getCollection('tables');
        setTimeout(() => {
          // fix
          this.tables = documents._rawValue;
        }, 500);
      } catch (error) {
        console.error(error);
      }
    },
    async custumberTable(id: any) {
      try {
        const { documents, isLoading } = await getCollection('tables', [
          'id',
          '==',
          id,
        ]);
        // this.custumerTable = documents;

        setTimeout(() => {
          // fix
          this.custumerTable = documents._rawValue[0];
        }, 500);
      } catch (error) {
        console.error(error);
      }
    },
    // addOrder(comida: any, id: any) {
    //   console.log(comida);
    //   // @ts-ignore: Unreachable code error
    //   const docRef = doc(db, 'tables', id);
    //   const tempItem = this.custumerTable.order.find(
    //     (i: any) => i.id === comida.id
    //   );
    //   if (tempItem) {
    //     const tempCart = this.custumerTable.order.map((item: any) => {
    //       if (item.id === comida.id) {
    //         item.amount += 1;
    //         item.total = item.price * item.amount;
    //         return item;
    //       }
    //       return item;
    //     });
    //     updateDoc(docRef, {
    //       order: tempCart,
    //     });
    //   } else {
    //     let orderItem = {
    //       id: comida.id,
    //       comida: comida.name,
    //       price: comida.price,
    //       amount: 1,
    //       total: comida.price * comida.amount,
    //     };
    //     updateDoc(docRef, {
    //       order: [...this.custumerTable.order, orderItem],
    //     });
    //   }
    // },
  },
});
