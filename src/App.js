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
     {/* <nav>
       <ul>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
       </ul>
     </nav> */}
     <Routes>
       <Route path="/" element={<Navigate to="/Home" replace="true" />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/Selling" element={<CreateProduct />} />
       <Route path="/Bag" element={<PageBag />} />
       <Route path="/Checkout" element={<Checkout />} />
       <Route path="/edit/:id" element={<EditProduct />} />
       <Route path="/productList" element={<ProductList />} />
       <Route path="/home" element={<Home />} />
       <Route path="/detail/:id" element={<Detail />} />
       <Route path="/profil" element={<Profil />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App;
