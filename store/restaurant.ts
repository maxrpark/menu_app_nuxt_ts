import { defineStore } from 'pinia';
import {
  TableInterface,
  Menu,
  ToastMessege,
} from '../ts/interfaces/globalInterfaces';
export const useRestaurantStore = defineStore({
  id: 'restaurant-store',
  state: () => {
    return {
      tables: [] as TableInterface[],
      max: 'max',
      custumerTable: {} as TableInterface,
      selectedTable: {} as TableInterface, // check if not same with custumerTable
      categories: [] as string[],
      menu: [] as Menu[],
      sub_categories: [] as string[],
      filtered_menu: [] as Menu[],
      tempList: [] as Menu[], // fix
      selectedCategory: 'all',
      sub_category: 'all',
      selected_menu: '' as string | number,
      showAmount: false,
      isTableSelected: false,
      showOrderMessege: false,

      toastMessege: {
        menuName: '',
        amount: 0,
      } as ToastMessege,

      ///
      table_check_out: false,
      restaurante_orders: [] as any[],
    };
  },
  getters: {
    filterMenu: (state) => (type: string, value: string) => {
      if (type === 'category') {
        if (value === 'all') {
          state.selectedCategory = 'all';

          return (state.filtered_menu = state.menu);
        } else {
          state.selectedCategory = value;
          state.filtered_menu = state.menu.filter(
            (item: Menu) => item.category === value
          );
          let sub_category_list = state.filtered_menu.map((item: Menu) => {
            return item.tags;
          });
          state.sub_categories = ['all', ...new Set(sub_category_list.flat())];
          state.tempList = [...state.filtered_menu];
          return state.filtered_menu, state.sub_categories;
        }
      } else {
        if (value === 'all') {
          state.sub_category = 'all';
          return (state.filtered_menu = state.tempList);
        } else {
          state.sub_category = value;
          state.filtered_menu = state.tempList.filter((item) =>
            item.tags.every((tag) => tag.includes(value))
          );

          return state.filtered_menu;
        }
      }
    },
    tableDescription: () => (des: string) => {
      var regex = /MB/g;
      return des.replace(regex, '<br/>');
    },
    GET_RESTAURANT_DAILY_TOTALS: (state) => () => {
      // let currentDateOrders = state.restaurante_orders.filter((order) => {
      //   return order.date === date;
      // });
      return state.restaurante_orders.reduce((acc, curr) => {
        return acc + curr.total_amount;
      }, 0);
    },
  },
  actions: {
    ADD_ITEM_TO_ORDER(id: number) {
      // this.showOrderMessege = false;
      this.selected_menu = id;
      if (this.selected_menu === id) {
        this.showAmount = true;
      } else {
        this.showAmount = false;
      }
    },
    FETCH_MENU_ITEMS() {
      // $fetch(`/api/products/`).then((res: any) => {
      $fetch(`http://localhost:8888/api/products/`).then((res: any) => {
        this.menu = res;
        this.filtered_menu = res;
        let category_list: string[] = res.map((item: Menu) => {
          return item.category;
        });
        this.categories = ['all', ...new Set(category_list)];
      });
    },

    setTables(data: TableInterface[]) {
      this.tables = data;
    },
    custumberTable(data: TableInterface) {
      this.custumerTable = data;
    },
    CHECKOUT_ORDERS(data: any) {
      this.restaurante_orders = data;
    },
    HANDLE_TABLE_CLICK(table: TableInterface) {
      // if (table.available) {
      this.custumerTable = table;
      this.isTableSelected = true;
      document.body.style.overflow = 'hidden';
      // }
    },
    CLOSE_MODAL() {
      this.isTableSelected = false;
      document.body.style.overflow = 'auto';
    },

    MANAGER_TABLE_DETAILS(id: string) {
      let selectedTable = this.tables.find(
        (item: TableInterface) => item.id === id
      );
      if (selectedTable) {
        this.selectedTable = selectedTable;
      }
    },
    SHOW_ADDED_ORDER_MESSEGE() {
      this.showOrderMessege = true;
      setTimeout(() => {
        this.showOrderMessege = false;
        this.selected_menu = '';
      }, 1000);
    },
    SHOW_TOAST_MESSEGE(name: string, amount: number) {
      this.toastMessege.menuName = name;
      this.toastMessege.amount = amount;
      let timeOut: number;
      const showToast = () => {
        const toastLiveExample = document.getElementById('liveToast')!;
        // @ts-ignore: Unreachable code error
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
        if (timeOut) clearTimeout(timeOut);
        timeOut = window.setTimeout(() => {
          toast.hide();
        }, 3000);
      };
      showToast();
    },

    TABLE_CHECK_OUT() {
      this.table_check_out = true;
    },
  },
});
