import { ActionTypes } from "../constants/action-types";
import { createProducts } from "../../../helper/date";
import axios from "axios";
import { setHeaders } from "../../../api/index";
import { useNavigate, Link } from "react-router-dom";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS,
    payload: product,
  };
};

// export const updateProduct = (updateProduct, id) => {
//   return (dispatch) => {
//     axios
//       .put(
//         `http://localhost:4000/v1/products/${id}`,
//         updateProduct,
//         setHeaders()
//       )
//       .then((product) => {
//         dispatch({
//           type: "UPDATE_PRODUCT",
//           product,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
export const createProduct = (data) => async (dispatch) => {
  dispatch({ type: "ADD_PRODUCTS_PENDING" });
  const result = await axios.post(
    "http://localhost:4000/v1/auth/login",
    data
  );
  dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: result });
};
// export const createProduct = (data) => async (dispatch) => {
//   dispatch({ type: 'ADD_PRODUCTS_PENDING' })
//   const navigate = useNavigate()
//    const createdAt = await 
//         axios
//           .post(`${process.env.REACT_APP_API_BACKEND}/products/`, data, {
//             "content-type": "multipart/form-data",
//           })
//           .then((res) => {
//             console.log("post success", res);
//             navigate("/productList");
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//     dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: createdAt });
//   }
export const deleteProduct = (product) => {
  return {
    type: ActionTypes.DELETE_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
