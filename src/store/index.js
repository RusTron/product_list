import { createStore } from 'redux';
import { ADD_PRODUCT } from '../variables';

console.log(ADD_PRODUCT);

const initialState = {
  products: [],
}

export const actionCreator = {
  addProduct: (product) => ({
    type: ADD_PRODUCT,
    payload: product,
  }),
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  const existedProduct = state.products.find((item) => item.name === action.payload.name);
  if (existedProduct) {
    existedProduct.amount += 1

    const { amount, price, sale } = existedProduct;

    if (sale) {
      existedProduct.sum = amount * price - (Math.floor(amount / sale.kg)
        * (price * (sale.percent / 100)));
    } else {
      existedProduct.sum = amount * price;
    }
  }

  switch (action.type) {
    case ADD_PRODUCT:
      return existedProduct
        ? { ...state }
        : {
          ...state,
          products: [...state.products, {
            ...action.payload,
            amount: 1,
            sum: action.payload.price,
          }],
        }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
