import React from 'react';

const InfoBook = (props) => {
    const {name,price,_id,author} = props.product;
    const deleteProduct=(id)=>{
        fetch(`https://stark-savannah-65943.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("Delete")
            alert("Item Deleted Please Refresh & Login")
        })
    }
    return (
        <div>
        <div className="container">
            <h5>Name : {name} || Author : {author} || Price : {price} ||
            <button onClick={()=>{deleteProduct(_id)}}>Delete</button>
            </h5>
        </div>
        </div>
    );
};

export default InfoBook;