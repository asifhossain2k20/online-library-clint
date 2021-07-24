import React, { useState } from 'react';
import { Card ,Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Book.css'
import CheckOut  from '../CheckOut/CheckOut'

const Book = (props) => {
    const history = useHistory()
    const [productId,setProductId]=useState([])
    const handleCheckOut=id=>{
        history.push(`/checkOut`)
        console.log(id);
        setProductId(id);
        localStorage.setItem('key', id);
    }
    const {name,price,author,imgURL}=props.product;

    return (
      
          <div className="container card-container">
        <Card className="leagueCardContainer shadow-lg p-3 mb-5 bg-white rounded d-flex align-items-center justify-content-center" style={{ width: '18rem',borderRadius:"20px"}}>
              <Card.Img  className="cardImgBg" variant="top" src={imgURL} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Author : {author}</Card.Title>
                    <Card.Text>
                        <h5>${price}</h5>
                    </Card.Text>
                    <Link>
                            <Button variant="primary" onClick={()=>handleCheckOut(props.product._id)}>BUY NOW!!!</Button>
                    </Link>
                    </Card.Body>
            </Card>
            
    </div>
    );
};

export default Book;