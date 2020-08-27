import React, {useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import data from '../data';
/* import axios from 'axios'; */
import '../App.css';

function Home(props) {
       
       /* const [products, setProduct] = ([useState]);

        useEffect(() => {
            const fetchData = async() =>{
                const {data} = await axios.get("/api/products");
                setProduct(data);
            }
            fetchData();
            return () => {
              //
            };
          }, []); */        

        return ( 
            <div>
            
                <main class="main">
                    <div className="content">
                        <ul className="products">
                           {data.products.map(product=>
                             <li className="product">
                                <img className="product-image" src={product.image} alt="Perfume" />
                                <div className="product-name"><Link to={"/ProductDetail/"+product._id}>{product.name}</Link></div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">Rs. {product.price}</div>
                           <div className=".product-rating">{product.rating} stars{product.reviews}</div>
                             </li>)
                            }
                        </ul>
                    </div>
                </main>
    
            </div>
            
         );
    
}
 
export default Home;
