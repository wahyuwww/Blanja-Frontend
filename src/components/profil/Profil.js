import React from 'react'
import '../form/styleCreate.css'
import profil from "../../assets/image/profilBig.png";
import home from "../../assets/image/seling-product/home (2) 1.png"
import vektor from "../../assets/image/seling-product/Vector (2).png"
import avatar from "../../assets/image/edit-avatar.png"
import pekage from "../../assets/image/seling-product/package 1.png";
import shoping from "../../assets/image/seling-product/shopping-cart (3) 1.png";

const Profil = ({titleOne,titleTwo,titleThere,imgOne,imgTwo,imgTheree}) => {
  return (
    <div class="col-lg-4 mt-2 select-profil">
      <div class="profil-avatar ">
        <table>
          <tbody>
            <td class=" align-middle float-start image">
              <img class="rounded-circle" src={profil} alt="img" />
            </td>
            <td class="align-middle float-start ms-3 image-text">
              <p class="post mb-2">Johanes Mikael</p>
              <p class=" edit-profil mt-2">
                <img src={avatar} class="me-2" alt="" />
                ubah profil
              </p>
            </td>
          </tbody>
        </table>
      </div>
      <div class="profil-select mt-5">
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-acount">
              <img src={imgOne} alt="" />
            </button>
            <button
              class="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              {titleOne}
            </button>
            <img src={vektor} class="img-down" alt="" />
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
          <li class="mb-1 mt-3">
            <button class="btn btn-location">
              <img src={imgTwo} alt="" />
            </button>
            <button
              class="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-black"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              {titleTwo}
            </button>
            <img src={vektor} class="img-down ms-4" alt="" />
            <div class="collapse show" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ms-5 small ">
                <li>
                  <a
                    class="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-2"
                    href="a"
                  >
                    My products
                  </a>
                </li>
                <li>
                  <a
                    class="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-3 text-secondary"
                    href="a"
                  >
                    Selling products
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1 mt-3">
            <button class="btn btn-mail">
              <img src={imgTheree} alt="" />
            </button>
            <button
              class="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              {titleThere}
            </button>
            <img src={vektor} class="img-down" alt="" />
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profil.defaultProps = {
  titleOne: "Store",
  titleTwo: "Products",
  titleThere: "Orders",
  imgOne: home,
  imgTwo: pekage ,
  imgTheree: shoping ,
};
export default Profil;