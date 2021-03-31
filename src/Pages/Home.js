import React, { useEffect, useState } from 'react'
import Hero from '../compo/Hero/Hero';
import Hero2 from '../compo/Hero/Hero2';
import Loader from '../compo/Loader/Loader';
import Product from '../compo/ProductsGrid/Product';
import { FetchAllProducts } from '../MyFunc';
function Home() {
    const [products,setProducts]=useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        FetchAllProducts(setProducts,setLoading);
      }, []);
    return (

        <>
            {/* <Hero/> */}
         
            <Hero2/>
            <div className="container">

            <div className="d-flex justify-content-center mt-5 mb-5">
                 <h1>Fresh New Products</h1>
            </div>
                <div className="row">
                {
                    loading?
                    <Loader/>
                    :
                    products?.map((item)=>{
                        return (

                            <Product key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.photo}
                            price={item.price}
                            />
                        )
                    })
                }

            </div>
            </div>

        </>
    )
}

export default Home
