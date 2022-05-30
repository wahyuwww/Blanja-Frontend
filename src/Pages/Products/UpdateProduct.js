import React from "react";
import Footer from "../../components/home/footer/Footer";
import NavbarAfterLogin from "../../components/home/navbar/NavbarAfterLogin";
import Update from "../../components/form/EditProduct";
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
