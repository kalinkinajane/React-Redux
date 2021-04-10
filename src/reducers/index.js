/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return { items: action.payload };
    }
    case "REMOVE_ITEM": {
      return { items: [] };
    }
    default:
      return initialState;
  }
};
