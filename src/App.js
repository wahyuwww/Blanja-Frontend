// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/DetailProduct";
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
// import Create from '../src/components/form/CreateProduct';
import ProductList from "./Pages/Products/ProductList";
// import SellingProduct from './Pages/SellingProduct';
import EditProduct from './Pages/Products/UpdateProduct';
import PageBag from './Pages/PageBag';
import Checkout from './Pages/Checkout';
import CreateProduct from './Pages/Products/CreateNew';
import Profil from './Pages/Profil';

function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Navigate to="/Home" replace="true" />} />
       <Route path="/home" element={<Home />} />
       <Route path="/detail/:id" element={<Detail />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/productList" element={<ProductList />} />
       <Route path="/edit/:id" element={<EditProduct />} />
       <Route path="/Selling" element={<CreateProduct />} />
       <Route path="/Bag" element={<PageBag />} />
       <Route path="/Checkout" element={<Checkout />} />
       <Route path="/profil" element={<Profil />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App;
