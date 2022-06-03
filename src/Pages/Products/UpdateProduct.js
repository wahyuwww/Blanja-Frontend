import React from "react";
import Footer from "../../components/module/home/footer/Footer";
import NavbarAfterLogin from "../../components/module/home/navbar/NavbarAfterLogin";
import Update from "../../components/module/ActionProduct/EditProduct";
const CreateNew = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <Update />
      <Footer />
    </div>
  );
};

export default CreateNew;
