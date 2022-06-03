import React from 'react'
import Footer from '../../components/module/home/footer/Footer'
import NavbarAfterLogin from '../../components/module/home/navbar/NavbarAfterLogin'
import CreateProducts from "../../components/module/ActionProduct/CreateProduct";
const CreateNew = () => {
  return (
      <div>
          <NavbarAfterLogin/>
          <CreateProducts />
          <Footer/>
    </div>
  )
}

export default CreateNew;