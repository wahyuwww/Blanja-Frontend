import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/module/profil/profil.css";
import axios from "axios";
import Profil from "../../components/module/profil/Profil";
import Footer from "../../components/module/home/footer/Footer";
import NavbarAfterLogin from "../../components/module/home/navbar/NavbarAfterLogin";
const ProductList = () => {
    const [products, getProducts] = useState([]);
    const navigate = useNavigate()
    async function fetchData() {
      try {
        const result = await axios({
          method: "GET",
          baseURL: process.env.REACT_APP_API_BACKEND,
          url: "/products/AllProduct",
        });
        getProducts(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);

   const deleteCategory = (id) => {
     axios.delete(`${process.env.REACT_APP_API_BACKEND}/products/${id}`).then(() => {
       alert("delete success");
       fetchData();
       // navigate('/product')
     });
   };

  return (
    <div className="my-bag">
      <NavbarAfterLogin />
      <div className="row">
        <Profil>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ms-5 small ">
            <li>
              <Link
                to="/productlist"
                className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-2"
              >
                myProduct
              </Link>
            </li>
            <li>
              <Link
                to="/selling"
                className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-3 text-secondary"
              >
                selling
              </Link>
            </li>
          </ul>
        </Profil>
        <div className="col-lg-7 profil-form">
          <div className="card mt-3">
            <div className="card-body">
              <button
                onClick={() => navigate("/")}
                className="btn btn-secondary me-5"
              >
                Back to home
              </button>
              <div className="table-responsive mt-4">
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
                            className="btn btn-primary "
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteCategory(item.id)}
                            className="btn btn-danger mt-1"
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