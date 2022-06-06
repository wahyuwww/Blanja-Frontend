import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import {
  productsReducer,
  CreateproductsReducer,
  selectedProductsReducer,
  DeleteProductsReducer,
  UpdateProductsReducer
} from "./productsReducer";
const rootReducer = combineReducers({
  auth: userReducer,
  Createproducts: CreateproductsReducer,
  allProducts: productsReducer,
  deleteProduct: DeleteProductsReducer,
  product: selectedProductsReducer,
  updateProduct: UpdateProductsReducer,
});

export default rootReducer