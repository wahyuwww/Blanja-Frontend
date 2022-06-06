import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home";
import Detail from "../../Pages/DetailProduct";
import Login from "../../Pages/auth/Login";
import Register from "../../Pages/auth/Register";
// import Create from '.../../src/components/form/CreateProduct';
import ProductList from "../../Pages/Products/ProductList";
// import SellingProduct from '../../Pages/SellingProduct';
import UpdateProduct from "../../Pages/Products/UpdateProduct";
import PageBag from "../../Pages/PageBag";
import Checkout from "../../Pages/Checkout";
import CreateProduct from "../../Pages/Products/CreateNew";
import Profil from "../../Pages/Profil";
import Page404 from "../../Pages/Page404/Page404";
import RequireAuth from '../../components/base/RequireAuth'
import { loadUser } from "../../configs/redux/actions/userAction";
import { useDispatch} from "react-redux"

function Router() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadUser());
    }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/productList"
          element={
            <RequireAuth>
              <ProductList />
            </RequireAuth>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <RequireAuth>
              <UpdateProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/Selling"
          element={
            <RequireAuth>
              <CreateProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/Bag"
          element={
            <RequireAuth>
              <PageBag />
            </RequireAuth>
          }
        />
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/profil"
          element={
            <RequireAuth>
              <Profil />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router