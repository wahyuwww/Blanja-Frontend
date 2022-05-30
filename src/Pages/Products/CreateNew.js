import React from 'react'
import Footer from '../../components/home/footer/Footer'
import NavbarAfterLogin from '../../components/home/navbar/NavbarAfterLogin'
import CreateProducts from "../../components/form/CreateProduct";
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