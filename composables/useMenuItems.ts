const useMenuItems = () => {
  let menu_amount = ref(0);

  const handleDecrease = () => {
    menu_amount.value--;
    if (menu_amount.value <= 0) menu_amount.value = 0;
  };
  const handleIncrease = () => {
    menu_amount.value++;
  };

  return {
    handleDecrease,
    handleIncrease,
    menu_amount,
  };
};

export default useMenuItems;
