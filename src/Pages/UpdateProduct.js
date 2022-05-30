import React from 'react'
import CreateProduct from '../components/form/CreateProduct'
import Footer from '../components/home/footer/Footer'
import Navbar from '../components/home/navbar/Navbar'

const SellingProduct = () => {
  return (
      <div>
          <Navbar />
          <CreateProduct />
          <Footer/>
    </div>
  )
}

export default SellingProduct