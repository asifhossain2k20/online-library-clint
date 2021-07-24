import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { context } from '../Home/Home';

const CheckOut = (props) => {
    
    const [data,setData]=useState([])
    
        const id = localStorage.getItem('key');
        fetch(`https://stark-savannah-65943.herokuapp.com/books/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            
        })
    return (
        <div>

            
<div className="container">
  <div className="row border">
    <div className="col"><h2>Name :</h2></div>
    <div className="col"><h2>Quantity :</h2></div>
    <div className="col"><h2>Price</h2></div>
    <div className="w-100"></div>
    <div className="col"><h4>{data.name}</h4></div>
    <div className="col"><h4> 1</h4></div>
    <div className="col"><h4>${data.price}</h4></div>
  </div>
  <br />
  <button className="btn btn-primary">Buy Now</button>
</div>
            
        </div>
    );
};

export default CheckOut;