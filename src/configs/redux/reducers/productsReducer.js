import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  isLoading : false
};




export const CreateproductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_PRODUCTS:
      return {
        ...state,
        products: payload.name.data,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteProductsReducer = (state = intialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.DELETE_PRODUCTS:
      // console.log(payload.data.data);
      return { ...state, products: payload.data.data };
      // return state.filter(
      //   (product) =>
      //     console.log(product)
      //     // product.data.data.id !== payload.data.data
      // );
    default:
      return state;
  }
};
export const UpdateProductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_PRODUCTS:
      return { ...state, products : payload.data.data };
    // case ActionTypes.UPDATE_PRODUCTS:
    //   console.log(payload.data.data.name)
    //   return {
    //     ...state,
    //     product: state.product.map((item) => {
    //       return item === payload.data.data ? payload.data.data : item;
    //     })
    //   }
    //   console.log(...payload.name);
    //  return state.map((product) =>
    //    product.id === payload.id ? payload : product
    //  );
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
