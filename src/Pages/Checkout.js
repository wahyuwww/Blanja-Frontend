import React from 'react'
import NavbarAfterLogin from '../components/home/navbar/NavbarAfterLogin';
import Check from "../components/Cart/Checkout";
const Checkout = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <Check />
    </div>
  );
};

export default Checkout;