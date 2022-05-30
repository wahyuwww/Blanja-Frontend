import React from 'react'
import './edit.css'
import avatar from "../../assets/image/profil-avatar.png"
import Profil from './Profil'
import home from "../../assets/image/user-profil.png"
import pekage from "../../assets/image/map-pin (3) 1.png";
import shoping from "../../assets/image/clipboard 1 (1).png";

const EditProfil = () => {
  return (
    <div class="my-bag">
      <div class="row">
        <Profil
          titleOne="My Account"
          titleTwo="Shipping Adrress"
          titleThere="My order"
           imgOne= { home }
  imgTwo={ pekage }
  imgTheree={ shoping }
        />
        <div class="col-lg-7 profil-form">
          <div class="card mt-3">
            <div class="card-body">
              <h3 class="title-profil">My Profile</h3>
              <p class="sub-profil text-secondary">
                Manage your profile information
              </p>
              <hr />
              <div class="row">
                <div class="col-sm-9">
                  <div class="mb-3 mt-1 row">
                    <label
                      for="Name"
                      class="col-sm-3 col-form-label text-end text-form"
                    >
                      Name
                    </label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value="Johanes Mikael"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label
                      for="email"
                      class="col-sm-3 col-form-label text-end text-form"
                    >
                      Email
                    </label>
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        value="johanes@gmail.com"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label
                      for="phoneNumber"
                      class="col-sm-3 col-form-label text-end text-form"
                    >
                      Phone number
                    </label>
                    <div class="col-sm-8">
                      <input
                        type="number"
                        class="form-control"
                        id="inputPassword"
                        value="08901289012"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label
                      for="gender"
                      class="col-sm-3 col-form-label text-end text-form"
                    >
                      Gender
                    </label>
                    <div class="col-sm-8">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-secondary"
                        for="flexRadioDefault1"
                      >
                        Laki-laki
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-secondary"
                        for="flexRadioDefault1"
                      >
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label text-end text-form"
                    >
                      Date of birth
                    </label>
                    <div class="col-sm-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Januari</option>
                        <option value="1">Febuari</option>
                        <option value="2">Maret</option>
                        <option value="3">April</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1990</option>
                        <option value="1">1991</option>
                        <option value="2">1992</option>
                        <option value="3">1993</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div class="col-sm-9">
                      <button type="button" class="btn btn-submit">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 image-profil text-center">
                  <img src={avatar} class="rounded-circle" alt="" />
                  <div class="select-avatar mt-3">
                    <button class="btn btn-select-profil">Select image</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfil