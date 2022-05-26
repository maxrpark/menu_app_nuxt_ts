import { defineStore } from 'pinia';
import getCollection from '../composables/getCollection';
import { TableInterface, Menu } from '../ts/interfaces/globalInterfaces';
export const useRestaurantStore = defineStore({
  id: 'restaurant-store',
  state: () => {
    return {
      tables: [] as TableInterface[],
      max: 'max',
      custumerTable: {} as TableInterface,
      categories: [] as string[],
      sub_categories: [] as string[],
      menu: [] as Menu[],
      filtered_menu: [] as Menu[],
      selectedCategory: 'all',
    };
  },
  getters: {
    filterMenu: (state) => (category: string) => {
      if (category === 'all') {
        return (state.filtered_menu = state.menu);
      }

      return (state.filtered_menu = state.menu.filter(
        (item: Menu) => item.category === category
      ));
    },
  },
  actions: {
    fetch() {
      const data = $fetch(`http://localhost:8888/api/products/`).then(
        (res: any) => {
          this.menu = res;
          this.filtered_menu = res;
          let category_list: string[] = res.map((item: Menu) => {
            return item.category;
          });
          this.categories = ['all', ...new Set(category_list)];
          let sub_category_list: string[] = res.map((item: Menu) => {
            return item.tags;
          });
          this.sub_categories = ['all', ...new Set(sub_category_list.flat())];
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
    async custumberTable(id: string) {
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
  },
});
