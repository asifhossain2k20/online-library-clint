import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Book from '../Book/Book';
import CheckOut from '../CheckOut/CheckOut';

const Home = () => {

     const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch('https://stark-savannah-65943.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])



    return (
        <div>
            <div class="d-flex justify-content-center">
            <div className="input-group w-50 p-3">
              <input type="search" className="form-control rounded " placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary">search</button>
            </div>
            </div>
            
            {
              products.length===0 ? <div class="d-flex justify-content-center"><div class="spinner-border d-flex justify-content-center" role="status">
              <span class="sr-only">Loading...</span>
            </div></div>
              
              :  products.map(product =><Book product={product}></Book>)
            }
           
        </div>
    );
};

export default Home;