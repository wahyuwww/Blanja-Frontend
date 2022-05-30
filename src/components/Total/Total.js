import React, { Children } from 'react'
import '../Bag/Bag.css'
const Total = ({ Children }) => {
  return (
    <div class="col-lg-4">
            <div class="card card-details card-right">
              <h3 class="title-shoping">Shopping summary</h3>
              <table class="mt-2">
                <tr>
                  <th class="text-left total-price">Order</th>
                  <td  class="float-end">$ 40.0</td>
                </tr>
                <tr>
                  <th class="text-left total-price mb-5">Delivery</th>
                  <td  class="float-end">$ 5.0</td>
                </tr>
                </table>
                <hr/>
              <table>
                  <tr>
                    <th class="total-shopping">Shopping summary</th>
                    <td  class="float-end text-end">$ 45.0</td>
                </tr>
              </table>
               <button class="mt-3 w-100 btn btn-checkout">Select payment</button>
            </div>
          </div>
  );
};

export default Total