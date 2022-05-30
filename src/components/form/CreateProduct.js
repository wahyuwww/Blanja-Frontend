import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../form/styleCreate.css";
import Profil from "../profil/Profil";
import Input from "./Input"

const CreateProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("https://fakeimg.pl/350x400/");
    const [name, setName] = useState('')
    const [description, setDeskripsion] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [typestock, setTypestock] = useState("");
    const [imagePreview, setImagePreview] = useState(
      "https://fakeimg.pl/350x400/"
    );
    // const [saveImage, setSaveImage] = useState(null)
   
    // const uploadGambar = () => {
    //     if (!saveImage) {
    //         alert("data tidak masuk")
    //     } else {
    //         let formdata = new FormData();
    //         formdata.append("photo", saveImage)
    //         fetch("http://localhost:4000/v1/products/", {
    //             method: "POST",
    //             body : FormData,
    //         }).then((res) => res.json()).then(data => {
    //             if (data.status === "success") {
    //                 window.location.href = data.image
    //             }
    //         })
    //     }
    // }
//   const [dataProduct, setDataProduct] = useState({
//     name: "",
//     stock: "",
//     description: "",
//     price: "",
//     typestock: "",
//     image: "",
//   });

//      const handleUpload = (e) => {
//         let upload = e.target.files[0].name;
//         setImage(`http://localhost:4000/img/${upload}`);
//         console.log(`http://localhost:4000/img/${upload}`);
//         console.log(e.target.files[0].name);
//      };;
//     const handleChange = (e) => {
//         setDataProduct({
//             ...dataProduct,
//         // [e.target.name]: e.target.files[0].name,
//         [e.target.name]: e.target.value,
//         });
//           console.log(e.target.value);
//     };
//   const handleProduct = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4000/v1/products/", dataProduct)
//       .then((res) => {
//         console.log(res.data.typestock);
//         navigate("/productList");
//       })
//       .catch((e) => {
//         alert(e.response.data.message);
//       });
//   };
    const onSubmit = (e) => {
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("stock", stock);
      data.append("price", price);
      data.append("typestock", typestock);
      data.append("image", image);
        e.preventDefault();
        axios.post("http://localhost:4000/v1/products/", data, {
          'content-type': 'multipart/form-data'
        }).then(res => {
            console.log('post success',res);
             navigate("/productList");
        })
            .catch(err => {
            console.log('err',err);
        })
    };

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
  return (
    <form onSubmit={onSubmit}>
      <div className="my-bag">
        <div className="row">
          <Profil />
          <div className="col-lg-7 profil-form">
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="title-selling mt-2">Inventory</h3>
                <div className="line"></div>
                <div className="row mt-3 ms-1">
                  <div className="col-sm-8">
                    <div className="mb-3 row">
                      <label
                        for="Name"
                        className="col-sm-4 col-form-label text-secondary"
                      >
                        Name of goods
                      </label>
                      <Input  id="floatingInput"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="title-selling mt-2">Item details</h3>
                <div className="line"></div>
                <div className="row mt-3 ms-1">
                  <div className="col-sm-8">
                    <div className="mb-3 row">
                      <label
                        for="Name"
                        className="col-sm-4 col-form-label text-secondary"
                      >
                        Unit price
                      </label>
                      <input
                        id="floatingPassword"
                        name="price"
                        type="number"
                        value={price}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control form-control-lg ms-2 mt-2 name-input"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="mb-3 row">
                      <label
                        for="Name"
                        className="col-sm-4 col-form-label text-secondary"
                      >
                        Stock
                      </label>
                      <input
                        id="floatingPassword"
                        name="stock"
                        type="number"
                        value={stock}
                        placeholder="Stock"
                        onChange={(e) => setStock(e.target.value)}
                        className="form-control form-control-lg ms-2 mt-2 name-input"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8 mt-3 mb-4">
                    <label
                      for="Name"
                      className="col-sm-12 col-form-label ms-2 mb-2 text-secondary"
                    >
                      Stock
                    </label>
                    <div className="stock-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="typestock"
                        value="baru"
                        checked={typestock === "baru"}
                        onChange={(e) => setTypestock(e.target.value)}
                      />
                      <label
                        className="form-check-label text-secondary ms-2"
                        for="flexRadioDefault1"
                      >
                        baru
                      </label>
                      <input
                        className="form-check-input ms-4"
                        type="radio"
                        name="typestock"
                        value="bekas"
                        checked={typestock === "bekas"}
                        onChange={(e) => setTypestock(e.target.value)}
                      />
                      <label
                        className="form-check-label text-secondary ms-2"
                        for="flexRadioDefault1 "
                      >
                        Bekas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="title-selling mt-2">Photo of goods</h3>
                <div className="line"></div>
                <div className="row mt-3 ms-2 me-2 photo-form">
                  <div className="col-sm-3 ms-2 mt-3">
                    <div className="card card-image">
                      <img
                        src={imagePreview}
                        alt="Bootstrap"
                        className="img-fluid "
                      />
                      <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                        <img src="../image/seling-product/box 5.png" alt="" />
                      </div>
                    </div>
                    <p className="text-center mt-2 text-secondary">
                      Foto utama
                    </p>
                  </div>
                  <div className="col-sm-2 mt-5 upload">
                    <div className="card">
                      <img
                        src={imagePreview}
                        alt="Bootstrap"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                        <img src="../image/seling-product/box 5.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 mt-5 upload">
                    <div className="card ">
                      <img
                        src={imagePreview}
                        alt="Bootstrap"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                        <img src="../image/seling-product/box 5.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 mt-5 upload">
                    <div className="card ">
                      <img
                        src={imagePreview}
                        alt="Bootstrap"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                        <img src="../image/seling-product/box 5.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 mt-5 upload">
                    <div className="card ">
                      <img
                        alt="Bootstrap"
                        src={imagePreview}
                        className="img-fluid"
                      />
                      <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                        <img src="../image/seling-product/box 5.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <hr className="upload" />
                  <div className="text-center mb-3">
                    <input
                      //   value={dataProduct.image}
                      //   onChange={handleUpload}
                      //   onChange={(event) => {
                      //       let upload = event.target.files[0].name
                      //       setDataProduct(`http://localhost:4000/img/${upload}`);
                      //       console.log(`http://localhost:4000/img/${upload}`);
                      //   }}
                      onChange={(e) => onImageUpload(e)}
                      className="form-control btn btn-upload"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="title-selling mt-2">Description</h3>
                <div className="line"></div>
                <div className="col-lg-12 mb-1 mt-4">
                  <div className="card">
                    <div className="card-body description">
                      <img
                        src="../image//seling-product/summernote.png"
                        alt=""
                      />
                      <div className="garis"></div>
                      <textarea
                        className="form-control"
                        id="floatingEmail"
                        name="description"
                        type="description"
                        value={description}
                        onChange={(e) => setDeskripsion(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="col-sm-12 text-end">
                <button className="btn btn-jual" type="submit">
                  Jual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;
