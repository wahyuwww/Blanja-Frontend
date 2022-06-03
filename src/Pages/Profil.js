import React from 'react'
import Footer from '../components/module/home/footer/Footer'
import NavbarAfterLogin from '../components/module/home/navbar/NavbarAfterLogin'
import EditProfil from '../components/module/profil/EditProfil'

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