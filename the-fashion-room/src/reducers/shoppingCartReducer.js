import { TYPES } from "../actions/shoppingCartActions";

export const shoppingCartinitialState = {
  products: [],
  cart: [],
};

export function shoppingCartReducer(state, action) {
  switch (action.type) {
    case "success":
      return { ...state, products: action.payload };
    case TYPES.ADD_TO_CART: {
      console.log();
      let newItem = state.products.find((item) => item.product_id === action.payload);
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      console.log();
      let newItem = state.products.find((item) => item.product_id === action.payload);
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      console.log();
      let newItem = state.products.find((item) => item.product_id === action.payload);
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.CLEAR_CART: {
      console.log();
      let newItem = state.products.find((item) => item.product_id === action.payload);
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    default:
      return state;
  }
}
