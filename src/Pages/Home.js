// import { Carousel } from 'bootstrap'
import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import Category from "../components/home/Category/Category";
import Carausel  from "../components/home/Caraousel/Carausel";
import Product from '../components/home/newProduct/Product';
import Populer from '../components/home/popular/Populer';
import Footer from '../components/home/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carausel />
      <Category />
      <Product subtitle="What are you currently looking for" title="New" />
      <Populer />
      <Footer />
    </div>
  );
}

export default Home