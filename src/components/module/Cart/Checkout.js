import React, { Component } from 'react'
import bag from "../../../assets/image/bag.png";
import Rectangle from "../../../assets/image/Rectangle 605.png";
import shape from "../../../assets/image/Shape.png";
import Total from "../Total/Total";
// import './cart.css'
import "../home/StyleHome.css";
// import Modal from "../../base/modal/Modal"
export class Checkout extends Component {
  render() {
    return (
       <div className="container my-check">
      <h3 className="title-bag">Checkout</h3>
      <p className="sub-chekout">Shipping Adress</p>
      <div className="row ">
        <div className="col-lg-8 pl-lg-0">
          <div className="card mb-3 ">
            <div className="card-body">
              <h4>Andreas Jane</h4>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <button
                className=" btn btn-address" 
                >
                  {/* <Modal/> */}
                Choose another address
              </button>
            </div>
          </div>
          <div className="card mb-3 ">
            <div className="table-responsive-sm">
              <table className="table">
                <tbody>
                  <td className="align-middle text-center ">
                    <img className="img-products" src={bag} alt="checkout" />
                  </td>
                  <td className="align-middle">
                    <p className="post mb-1">Men's formal suit -</p>
                    <span className="text-secondary sub-post">Zalora Cloth</span>
                  </td>
                  <td className="align-middle text-end">
                    <tr>
                      <button className="btn btn-secondary min">
                        <img src={Rectangle} alt="" className="icon-min" />
                      </button>
                    </tr>
                  </td>
                  <td className="align-middle one text-center">1</td>
                  <td className="align-middle ">
                    <tr>
                      <button className="btn btn-light max">
                        <img src={shape} alt="" className="icon-max" />
                      </button>
                    </tr>
                  </td>
                  <td className="align-middle price">$ 20.0</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Total deleveri="Delevery" shopping="Shopping Payment"Sumprice="$80.0"price="$ 40.0"/>
      </div>
    </div>
    )
  }
}

export default Checkout