import React from 'react'
import PageBage from "../components/Bag/Bag";
import Footer from "../components/home/footer/Footer";
import NavbarAfterLogin from "../components/home/navbar/NavbarAfterLogin";
const PageBag = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <PageBage />
      <Footer />
    </div>
  );
};

export default PageBag;