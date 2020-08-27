import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
import data from '../data';

function ProductDetail(props) {

    console.log(props.match.params._id);
    const product= data.products.find(x=>x._id===props.match.params._id);
   return( <div>
        <div className="back"><Link to='/home'>Back</Link></div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="image"></img>
            <div className="details-info">
                <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>{product.ratings}Stars{product.reviews} Reviews</li>
                    <li>{product.brand}</li>
                    <li>Price: <b>{product.price}</b></li>
                    <li><b>Description:</b> {product.description}</li>
                </ul>
                <button className='button-wishlist'>Add To Wishlist</button>
            </div>
            </div>

        </div>
    </div>);
}
 
export default ProductDetail;