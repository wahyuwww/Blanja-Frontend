import React from 'react'
import Footer from '../components/home/footer/Footer';
import NavbarAfterLogin from '../components/home/navbar/NavbarAfterLogin';
import Check from "../components/Cart/Checkout";

const Checkout = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <Check />
      <Footer />
    </div>
  );
};

export default Checkout;