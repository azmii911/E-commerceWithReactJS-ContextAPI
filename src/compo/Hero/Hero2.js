import React from 'react'
import HeroLeft from "../../assets/heroSide.svg"; 

import { Link } from 'react-router-dom'

function Hero2() {
    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-5 align-self-center">
                       <h4 className="h6">Shop is fun</h4>
                        <h1 className="h1" style={{fontWeight:'bold',fontSize:'3em  '}}>
                            BROWSE OUR PREMIUM PRODUCT</h1>
                            <p><em>Us which over of signs divide dominion 
                            deep fill bring they're meat beho upon own earth without morning over third. 
                            Their male dry. They are great appear whose land fly grass.</em></p>
                       
                        <Link to="/shop">
                        <button className="btn btn-primary">Shop Now</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                            <img src={HeroLeft} className="img-fluid"/>
                    </div>
                </div>
            </div>
    )
}

export default Hero2
