import React from 'react'
// import CreateProduct from '../components/form/CreateProduct'
import Footer from '../components/module/home/footer/Footer'
import NavbarAfterLogin from '../components/module/home/navbar/NavbarAfterLogin'
import ProductList from './Products/ProductList'

const SellingProduct = () => {
  return (
      <div>
          <NavbarAfterLogin />
          <ProductList />
          <Footer/>
    </div>
  )
}

export default SellingProduct