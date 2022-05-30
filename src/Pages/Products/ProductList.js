import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth/style.css";
import axios from "axios";
import Profil from "../../components/profil/Profil";
import Footer from "../../components/home/footer/Footer";
import NavbarAfterLogin from "../../components/home/navbar/NavbarAfterLogin";
const ProductList = () => {
    const [products, getProducts] = useState([]);
    const navigate = useNavigate()
    // const getData = () => {
    //   fetch("http://localhost:4000/v1/products/AllProduct")
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res.data[0].image.split(",")[0]);
    //       setProducts(res.data);
    //     });
    // };

    // useEffect(() => {
    //   getData();
    // }, []);
    async function fetchData() {
      try {
        const result = await axios({
          method: "GET",
          baseURL: "http://localhost:4000/v1",
          url: "/products/AllProduct",
        });
        // console.log(result.data.data[1].image.split(",")[1]);
        getProducts(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);

   const deleteCategory = (id) => {
     axios.delete(`http://localhost:4000/v1/products/${id}`).then(() => {
       alert("delete success");
       fetchData();
       // navigate('/product')
     });
   };

  return (
    <div className="my-bag">
      <NavbarAfterLogin />
      <div className="row">
        <Profil  />
        <div className="col-lg-7 profil-form">
          <div className="card mt-3">
            <div className="card-body">
              <button
                onClick={() => navigate("/")}
                className="btn btn-light me-5"
              >
                kembali ke home
              </button>
              <Link to="/Selling" className="btn btn-success">
                Add New
              </Link>
              <div class="table-responsive mt-4">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>stock</th>
                      <th>Deskripsion</th>
                      <th>Merk</th>
                      <th>Color</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.description}</td>
                        <td>{item.merk}</td>
                        <td>{item.typestock}</td>
                        <td>
                          <Link
                            to={`/edit/${item.id}`}
                            className="button is-small is-info"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteCategory(item.id)}
                            className="btn btn-primary"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList