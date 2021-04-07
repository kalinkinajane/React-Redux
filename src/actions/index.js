export const addItem = (newDate) => {
  return { type: "ADD_ITEM", payload: newDate };
};
export const removeItem = (newDate) => {
  return { type: "REMOVE_ITEM" };
};
