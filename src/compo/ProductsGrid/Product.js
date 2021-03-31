import React from 'react'
import { useHistory } from 'react-router';
import { useStateValue } from '../../StateProvider'
import CurrencyFormat  from 'react-currency-format';
import './ProductGrid.scss'

function Product(props) {
    const [{basket},dispatch] = useStateValue();
    let history = useHistory();
    const addToBasket = () =>{
      
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                quan: 1,
            },
        });
    };
    //Buy Now Btn
    const addToBasketGoToCheckout = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
            },
        });
        history.push('/checkout');
    };
    return (
       
                <div className="col-md-4 text-center align-baseline">
                    <div className="product-grid9 ">
                    <div className="product-image9 d-flex">
                        <a href="#">
                            <img className="img-fluid pic-1" src={props.image} />
                           
                        </a>
                    </div>
                    <div className="product-content">
                        <h2 className="title">{props.title}</h2>
                        {/* <p className="lead">{props.des}</p> */}
                             {/* ${props.price} */}
                             <CurrencyFormat
                             renderText={(value)=>(
                                <div className="price">Price: { value}     
                                </div>
                             )}
                             decimalScale={2}
                             value={props.price}
                             displayType={"text"}
                             prefix={"$"}
                            />
                             
                        <p>IDddd {props.id}</p>

                        <button onClick={addToBasket} className="btn btn-primary">Add to cart</button>
                        <button onClick={addToBasketGoToCheckout} className="btn btn-dark ms-2">Buy Now</button>

                    </div>
                    </div>
                </div>
            
    )
}

export default Product
