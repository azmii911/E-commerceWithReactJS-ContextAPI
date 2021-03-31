import React from 'react'
import './Cart.css'
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../../reducer';

function Cart() {
    const [{basket},dispatch] = useStateValue();

    console.log(basket);

    const removeFromBasket = (x)=>{
        dispatch({
            
            type:'REMOVE_FROM_BASKET',
            id: x,
        });
    }
    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">ID</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  {
                    basket.length >0 ? 
                    basket?.map((item,i)=>{
                        return(
                      <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img src={item.image} alt="" width="70" className="img-fluid rounded shadow-sm" />
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mx-2"> {item.title}</h5>
                          </div>
                        </div>
                      </th>
                      <CurrencyFormat 
                          renderText={(value)=>(
                            <td className="border-0 align-middle"><strong>{value}</strong></td>
                          )}
                          decimalScale={2}
                          value={item.price}
                          displayType={"text"}
                          prefix={"$"}
                      />
                      <td>
                        {item.id}
                      </td>
                      <td className="border-0 align-middle"><button onClick={()=>removeFromBasket(item.id)} className="btn btn-dark">Remove</button>                      
                      </td>
                    </tr>
                    )
                    }) : <h1>Your Cart is empty</h1>

                  }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row bg-white rounded shadow-sm">
        <div className="col-lg-6"> {/* Blank 6 col*/}        </div>
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul className="list-unstyled mb-4">
            <CurrencyFormat
                             renderText={(value)=>(
                                
                                <h5 className="font-weight-bold">Total {value}</h5>
                             )}
                             value={getTotal(basket)}
                             decimalScale={2}
                             thousandSeparator={true}
                             displayType={"text"}
                             prefix={"$"}
                            />
             </ul><Link to="/checkout" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</Link>
          </div>
        </div>
      </div>

    </div>
       
    )
}

export default Cart
