import React from 'react'
import Footer from '../components/home/footer/Footer'
import NavbarAfterLogin from '../components/home/navbar/NavbarAfterLogin'
import EditProfil from '../components/profil/EditProfil'

const Profil = () => {
  return (
      <div>
          <NavbarAfterLogin/>
          <EditProfil/>
          <Footer/>
    </div>
  )
}

export default Profil