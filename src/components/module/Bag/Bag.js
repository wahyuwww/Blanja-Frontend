import React,{useEffect} from 'react'
import '../home/StyleHome.css'
// import bag from '../../../assets/image/bag.png'
import Rectangle from '../../../assets/image/Rectangle 605.png'
import shape from '../../../assets/image/Shape.png'
import Total from '../Total/Total'
import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../../../configs/redux/actions/productsActions";
import {cartAction}  from "../../../configs/redux/actions/cartAction"
// import axios from "axios"

const Bag = () => {
   
  // eslint-disable-next-line no-unused-vars
  const { products } = useSelector((state) => state.allProducts);
  const { data } = useSelector((state) => state.carts);
  let { name, price, merk, image } = data;
  const dispatch = useDispatch();
     console.log(data);
     const handleBag = () => {
       dispatch(cartAction());
     };
  // const fetchProducts = async () => {
  //     const response = await axios
  //       .get(`${process.env.REACT_APP_API_BACKEND}/products/`)
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     dispatch(setProducts(response.data.data));
  //   };
      useEffect(() => {
      //  fetchProducts()
       handleBag()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div className="container bag-my">
      <h3 className="title-bag">My Bag</h3>
      <div className="row ">
        <div className="col-lg-8 pl-lg-0">
          <div className="card mb-3 select-all">
            <div className="table-responsive-sm">
              <table className="table mt-3">
                <tbody>
                  <td className="me-5">
                    <div className="check-select">
                      <label className="customcheck ms-2">
                        <p className="select-item ms-4">
                          Select all items{" "}
                          <span className="text-secondary">
                            (2 items selected)
                          </span>{" "}
                        </p>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span className="checkmak"></span>
                      </label>
                    </div>
                  </td>
                  <td className="delete text-right">Delete</td>
                </tbody>
              </table>
            </div>
          </div>
          {Object.keys(data).length === 0 ? (
            <div className="loading">...Loading</div>
          ) : (
            <div className="card mb-3 ">
              <div className="table-responsive-sm">
                <table className="table">
                  <tbody>
                    <td className="align-middle">
                      <div className="check ms-2 mt-2">
                        <label className="customcheck mt-2 input">
                          /
                          <input
                            className="form-check-input "
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </td>
                    <td className="align-middle  float-start">
                      <img
                        className="img-products"
                        src={image}
                        alt="product"
                      />
                    </td>
                    <td className="align-middle float-start">
                      <p className="post mb-1">{name}</p>
                      <span className="text-secondary sub-post">
                        {merk}
                      </span>
                    </td>
                    <td className="align-middle">
                      <tr>
                        <button className="btn btn-secondary min">
                          <img src={Rectangle} alt="" className="icon-min" />
                        </button>
                      </tr>
                    </td>
                    <td className="align-middle one">1</td>
                    <td className="align-middle">
                      <tr>
                        <button className="btn btn-light max">
                          <img src={shape} alt="" className="icon-max" />
                        </button>
                      </tr>
                    </td>
                    <td className="align-middle price">{price}</td>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <Total totalPrice="Total Price" />
      </div>
    </div>
  );
}

export default Bag;
