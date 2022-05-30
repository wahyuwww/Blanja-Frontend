import './StyleDetail.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
// import image1 from '../../../assets/image/detail products/primary.png'
// import image2 from '../../../assets/image/detail products/image2 (2).png'
// import image3 from '../../../assets/image/detail products/image2 (3).png'
// import image4 from '../../../assets/image/detail products/image2 (1).png'
// import image5 from '../../../assets/image/detail products/secondary2.png'
import retanggle from "../../../assets/image/detail products/Rectangle 21.png";
import shape from "../../../assets/image/detail products/Shape (1).png";

const Content = () => {
    
    //  const navigate = useNavigate();
     const [name, setName] = useState("");
     const [description, setDeskripsion] = useState("");
    //  const [stock, setStock] = useState("");
    const [typestock, setTypestock] = useState("");
     const [price, setPrice] = useState("");
     const [imagePreview, setImagePreview] = useState(
       "https://fakeimg.pl/350x200/"
     );
     const { id } = useParams();


     useEffect(() => {
       getProductById();
     }, []);

    //  const onImageUpload = (e) => {
    //    const file = e.target.files[0];
    //    setImage(file);
    //    setImagePreview(URL.createObjectURL(file));
    //  };
     const getProductById = async () => {
       const response = await axios.get(
         `http://localhost:4000/v1/products/${id}`
       );
       console.log(response);
       setImagePreview(response.data.data.image);
       setName(response.data.data.name);
       setPrice(response.data.data.price);
       setDeskripsion(response.data.data.description);
       setTypestock(response.data.data.typestock);
     };
  return (
    <div>
      <div className="container child-page">
        <div className="row mt-3">
          <div className="col-lg-5">
            <div className="galleries">
              <div className="galleries-container">
                <img src={imagePreview.split(",")[0]} className="w-100" alt="" />
              </div>
              <div className="thumb mt-3 text-center">
                <a href="../image/detail products//secondary1.png" className="">
                  <img src={imagePreview.split(",")[0]} alt="" />
                </a>
                <a
                  href="../image/detail products//secondary2.png"
                  className="ms-2"
                >
                  <img src={imagePreview.split(",")[0]} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (1).png"
                  className="ms-2"
                >
                  <img src={imagePreview.split(",")[0]} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (2).png"
                  className="ms-2"
                >
                  <img src={imagePreview.split(",")[0]} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (3).png"
                  className="ms-2"
                >
                  <img src={imagePreview.split(",")[0]} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6  ms-2">
            <div className="title-product">
              <h3 className="product-title mt-3">{name}</h3>
              <p className="text-secondary sub-title mt-3">Zalora Cloth</p>
              <div className="d-flex justify-content-start text-warning start mt-3">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <p className="rating  mt-2 ms-1 text-dark">(10)</p>
              </div>
            </div>
            <div className="price-products mt-5">
              <p className="mb-3 title-price">Price</p>
              <h3 className="price-detail mt-3">{price}</h3>
            </div>
            <div className="color-products mt-5 mb-2">
              <p className="title-color">Color</p>
              <div className="d-flex justify-content-start start mt-4">
                <div className="d-flex  align-items-center btn-border">
                  <button className="btn btn-black"></button>
                </div>
                <button className="btn btn-red"></button>
                <button className="btn btn-blue"></button>
                <button className="btn btn-green"></button>
              </div>
            </div>
            <div className="size mt-5">
              <div className="d-flex justify-content-start ms-1 text-black">
                <p className="title-size">Size</p>
                <p className="title-jumlah ms-5 text-black">Jumlah</p>
              </div>
              <div className="d-flex justify-content-start mt-1 ms-2">
                <div className="d-flex btn-min btn">
                  <img src={retanggle} className="m-auto icon" alt="" />
                </div>
                <p className="ms-2 me-2 mt-1 size"></p>
                <div className="d-flex btn-max btn">
                  <img src={shape} className="m-auto icon" alt="" />
                </div>
                <div className="d-flex btn-min btn ms-5">
                  <img src={retanggle} className="m-auto icon" alt="" />
                </div>
                <p className="ms-2 me-2 mt-1 size">1</p>
                <div className="d-flex btn-max btn">
                  <img src={shape} className="m-auto icon" alt="" />
                </div>
              </div>
            </div>
            <div className="submit mt-5 mb-5">
              <div className="d-flex justify-content-start  ms-1">
                <div className="col-lg-3 ">
                  <button className="btn btn-chat">Chat</button>
                </div>
                <div className="col-lg-4 ms-1">
                  <a href="../Bag/bag.html">
                    <button className="btn btn-bag">Add bag</button>
                  </a>
                </div>
                <div className="col-lg-5 ms-1">
                  <a href="../Checkout/checkout.html">
                    <button className="btn btn-buy">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div className="col-lg-12">
            <h3 className="title-info">Informasi Produk</h3>
            <h4 className="mt-4 text-sub">Condition</h4>
            <p className="text-danger new">{typestock}</p>
            <p className="text-sub">Description</p>
            <div className="text ms-1 text-secondary">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content