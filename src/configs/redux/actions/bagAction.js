// import axios from "axios"
// import { ActionTypes } from "../constants/action-types";

// export const bagAdd = (id) => async (dispatch) => {
//   dispatch({ type: "ADD_TODO_PENDING" });
//   const bags = await axios
//     .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(bags);
//   // return {
//   //     type: 'ADD_TODO',
//   //     payload: result
//   // }
//   dispatch({ type: ActionTypes.ADD_BAG, payload: bags });
// };

export const cartAction = (id, name, price, image) => async (dispatch) => {
  const data = {
    id: id,
    name: name,
    price: price,
    image: image,
  };
  try {
    dispatch({ type: "ADD_TO_CART", payload: data });
  } catch (error) {
    console.log(error);
  }
};