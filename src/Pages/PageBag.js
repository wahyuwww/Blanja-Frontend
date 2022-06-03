import React from 'react'
import PageBage from "../components/module/Bag/Bag";
import Footer from "../components/module/home/footer/Footer";
import NavbarAfterLogin from "../components/module/home/navbar/NavbarAfterLogin";
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