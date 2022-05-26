const useMenuItems = () => {
  let selected_menu = ref<number | null>(null);
  let showAmount = ref(false);
  let menu_amount = ref(0);

  const addToOder = (id: number) => {
    selected_menu.value = id;
    if (selected_menu.value === id) {
      showAmount.value = !showAmount.value;
    } else {
      showAmount.value = false;
    }
  };

  const handleDecrease = () => {
    menu_amount.value--;
    if (menu_amount.value <= 0) menu_amount.value = 0;
  };
  const handleIncrease = () => {
    menu_amount.value++;
  };

  return {
    addToOder,
    handleDecrease,
    handleIncrease,
    menu_amount,
    showAmount,
    selected_menu,
  };
};

export default useMenuItems;
