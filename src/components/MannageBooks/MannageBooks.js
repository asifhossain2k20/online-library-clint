import React, { useEffect, useState } from 'react';
import InfoBook from '../InfoBook/InfoBook';

const MannageBooks = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://stark-savannah-65943.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (
        <div className="container">
            <h2>Total Product in Our Website {products.length}</h2>
             {
              products.length===0 ? <div class="d-flex justify-content-center"><div class="spinner-border d-flex justify-content-center" role="status">
              <span class="sr-only">Loading...</span>
            </div></div>
              
              :  products.map(product =><InfoBook product={product}></InfoBook>)
            }
        </div>
    );
};

export default MannageBooks;