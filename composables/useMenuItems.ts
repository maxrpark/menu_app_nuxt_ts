const useMenuItems = () => {
  let menu_amount = ref(1);

  const handleDecrease = () => {
    menu_amount.value--;
    if (menu_amount.value <= 1) menu_amount.value = 1;
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
