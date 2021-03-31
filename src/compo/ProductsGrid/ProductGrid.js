import React from 'react'
import './ProductGrid.scss';
function ProductGrid() {
    return (
        <div>
<div className="container mt-10">
    <h3 className="h3">Fresh New Products </h3>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
                <div className="product-image9 d-flex">
                    <a href="#">
                        <img className="img-fluid pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-1.jpg"/>
                    </a>
                </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="#">Women's Top</a></h3>
                                        <div className="price"> $12.60 - $40.53</div>
                                        <button className="btn btn-primary">Add to cart</button>
                                        <button className="btn btn-dark ms-2">Buy Now</button>

                </div>
            </div>
        </div> 
        <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
                <div className="product-image9">
                    <a href="#">
                        <img className="pic-1 " src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-3.jpg"/>
                    </a>
                </div>
                <div className="product-content">
                   
                    <h3 className="title"><a href="#">Men's Shirt</a></h3>
                    <div className="price"> $10.20 </div>
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-dark ms-2">Buy Now</button>

                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
                <div className="product-image9">
                    <a href="#">
                        <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-5.jpg" />
                    </a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's Top</a></h3>
                    <div className="price"> $12.60 - $40.53</div>
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-dark ms-2">Buy Now</button>

                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
                <div className="product-image9">
                    <a href="#">
                        <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-7.jpg" />
                    </a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's Top</a></h3>
                    <div className="price"> $12.60 - $40.53</div>
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-dark ms-2">Buy Now</button>

                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default ProductGrid
