import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
//import './Checkout.css'
function Checkout() {
  const [{basket},dispatch] = useStateValue();

    return (
    <div className="container mt-5">

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">{basket?.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {
             basket?.map((item,index)=>{
                  return(                            
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="d-flex align-content-center ">
                      <img src={item.image} alt="Product In Cart" height="70" width="60"/>
                      <h6 className="my-0 ms-4 justify-content-center ">{item.title}</h6>
                      {/* <small className="text-muted">Brief description</small> */}
                    </div>
                    <span className="text-muted">${item.price}</span>
                  </li>

                  )
              })
            }
         

            
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <CurrencyFormat
                             renderText={(value)=>(
                               <strong>Total: {value}</strong>
                             )}
                             value={getTotal(basket)}
                             decimalScale={2}
                             displayType={"text"}
                             prefix={"$"}
                            />
              
            </li>
          </ul>
                               
         <form>

         <h4 className="mb-3">Payment</h4>

    <div className="d-block my-3">
      <div className="custom-control custom-radio">
        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
        <label className="custom-control-label" for="credit">Credit card</label>
      </div>
      
      <div className="custom-control custom-radio">
        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
        <label className="custom-control-label" for="paypal">Paypal</label>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label for="cc-name">Name on card</label>
        <input type="text" className="form-control" id="cc-name" placeholder="" required />
        <small className="text-muted">Full name as displayed on card</small>
        <div className="invalid-feedback">
          Name on card is required
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <label for="cc-number">Credit card number</label>
        <input type="text" className="form-control" id="cc-number" placeholder="" required/>
        <div className="invalid-feedback">
          Credit card number is required
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 mb-3">
        <label for="cc-expiration">Expiration</label>
        <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
        <div className="invalid-feedback">
          Expiration date required
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <label for="cc-expiration">CVV</label>
        <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
        <div className="invalid-feedback">
          Security code required
        </div>
      </div>
    </div>
    <hr className="mb-4"/>
    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

            </form>

            
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="firstName">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="" value="" required/>
                    <div className="invalid-feedback">
                      Valid Email is required.
                    </div>
                  </div>
                  
                </div>

            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
          
            </form>
        </div>
      </div>
    </div>
    
    )
}

export default Checkout
