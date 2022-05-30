import React from 'react'
import Content from '../components/home/Detail/Content';
import InformasionProduct from '../components/home/Detail/InformasionProduct';
import Navbar from "../components/home/navbar/Navbar";
import Product from '../components/home/newProduct/Product';

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
          <Content />
          <InformasionProduct/>
      <Product
        title="You can also like this"
        subtitle="You’ve never seen it before!"
      />
    </div>
  );
}

export default DetailProduct