import React,{useState} from 'react'
import './edit.css'
import avatar from "../../../assets/image/profil-avatar.png"
import Profil from './Profil'
import home from "../../../assets/image/user-profil.png"
import pekage from "../../../assets/image/map-pin (3) 1.png";
import shoping from "../../../assets/image/clipboard 1 (1).png";
import {useSelector} from "react-redux"
const EditProfil = () => {
    const { user } = useSelector((state) => state.auth);
    const [imagePreview, setImagePreview] = useState(avatar);
   const onImageUpload = (e) => {
     const file = e.target.files[0];
     setImagePreview(URL.createObjectURL(file));
     console.log(URL.createObjectURL(file));
   };
  return (
    <div className="my-bag">
      <div className="row">
        <Profil
          titleOne="My Account"
          titleTwo="Shipping Adrress"
          titleThere="My order"
          imgOne={home}
          imgTwo={pekage}
          imgTheree={shoping}
        />
        <div className="col-lg-7 profil-form">
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="title-profil">My Profile</h3>
              <p className="sub-profil text-secondary">
                Manage your profile information
              </p>
              <hr />
              <div className="row">
                <div className="col-sm-9">
                  <div className="mb-3 mt-1 row">
                    <label
                      htmlFor="Name"
                      className="col-sm-3 col-form-label text-end text-form"
                    >
                      Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        value={user.name}
                      />
                    </div>
                  </div>
                  <div className="mb-4 row">
                    <label
                      htmlFor="email"
                      className="col-sm-3 col-form-label text-end text-form"
                    >
                      Email
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control"
                        value={user.email}
                      />
                    </div>
                  </div>
                  <div className="mb-4 row">
                    <label
                      htmlFor="phoneNumber"
                      className="col-sm-3 col-form-label text-end text-form"
                    >
                      Phone number
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="inputPassword"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="mb-4 row">
                    <label
                      htmlFor="gender"
                      className="col-sm-3 col-form-label text-end text-form"
                    >
                      Gender
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="flexRadioDefault1"
                      >
                        Laki-laki
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="flexRadioDefault1"
                      >
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-form-label text-end text-form"
                    >
                      Date of birth
                    </label>
                    <div className="col-sm-2">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Januari</option>
                        <option value="1">Febuari</option>
                        <option value="2">Maret</option>
                        <option value="3">April</option>
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1990</option>
                        <option value="1">1991</option>
                        <option value="2">1992</option>
                        <option value="3">1993</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-9">
                      <button type="button" className="btn btn-submit">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 image-profil text-center">
                  <img src={imagePreview} className="rounded-circle" alt="" />
                  <div className="select-avatar mt-3">
                    <div className="fileUpload btn btn-light btn-select-profil">
                      <span>Choase File</span>
                      <input
                        type="file"
                        className="upload"
                        onChange={(e) => onImageUpload(e)}
                      />
                    </div>
                    {/* <button >Select image</button> */}
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