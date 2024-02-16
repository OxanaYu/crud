import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../../helpers/const";
import { getLocalStorageCart } from "../../helpers/functions";

const incartContext = createContext();
export const useCart = () => useContext(incartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getProductsCountInCart(),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const values = {};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // !  GET
  // функция для получения продуктов, добавленных в корзину, из localStorage

  const getCart = () => {
    let cart = getLocalStorageCart();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          postsincart: [],
          subCount: 0,
        })
      );
      cart = {
        postsincart: [],
        subCount: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  // ! CREATE
  const addPostToCard = (post) => {
    let cart = getLocalStorageCart();
    if (!cart) {
      cart = {
        postsincart: [],
        subCount: 0,
      };
    }
    let newPostinCart = {
      item: post,
      count: 1,
    };
  };

  return (
    <incartContext.Provider value={values}>{children}</incartContext.Provider>
  );
};

export default CartContext;
