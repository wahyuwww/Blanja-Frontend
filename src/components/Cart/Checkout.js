import React from 'react'
import bag from "../../assets/image/bag.png";
import Rectangle from "../../assets/image/Rectangle 605.png";
import shape from "../../assets/image/Shape.png";
import Total from "../Total/Total";
import './cart.css'

const Checkout = () => {
  return (
    <div class="container my-check">
      <h3 class="title-bag">Checkout</h3>
      <p class="sub-chekout">Shipping Adress</p>
      <div class="row ">
        <div class="col-lg-8 pl-lg-0">
          <div class="card mb-3 ">
            <div class="card-body">
              <h4>Andreas Jane</h4>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <button
                class=" btn btn-address"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
              >
                Choose another address
              </button>
            </div>
          </div>
          <div class="card mb-3 ">
            <div class="table-responsive-sm">
              <table class="table">
                <tbody>
                  <td class="align-middle text-center ">
                    <img class="img-products" src={bag} alt="checkout" />
                  </td>
                  <td class="align-middle">
                    <p class="post mb-1">Men's formal suit -</p>
                    <span class="text-secondary sub-post">Zalora Cloth</span>
                  </td>
                  <td class="align-middle text-end">
                    <tr>
                      <button class="btn btn-secondary min">
                        <img src={Rectangle} alt="" class="icon-min" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle one text-center">1</td>
                  <td class="align-middle ">
                    <tr>
                      <button class="btn btn-light max">
                        <img src={shape} alt="" class="icon-max" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle price">$ 20.0</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Total />
      </div>
    </div>
  );
}

export default Checkout