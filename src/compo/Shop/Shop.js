import React, { useEffect, useState } from 'react'
import Product from '../ProductsGrid/Product';
import {FetchAllProducts} from '../../MyFunc';
import Loader from '../Loader/Loader';

function Shop() {
    const [products,setProducts]=useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        FetchAllProducts(setProducts,setLoading);
      }, []);
    
    return (
        <div className="container">
            <div className="row">

            {
               loading?
               <Loader/>
                :
                products?.map((item) => {
                    return(
                            <Product key={item.id}
                            id={item.id}
                            title={item.title} 
                            des={item.des} 
                            image={item.photo}
                            price={item.price}
                           />
                    )
                })
                

        }
            </div>

        </div>
    )
}

export default Shop
