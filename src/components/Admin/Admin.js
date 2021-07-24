import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="container text-center">
            <h1>I am Admin</h1>
        <div class="d-flex justify-content-around">
           <button ><Link className="nav-link" to="/mannageBooks">Mannage Books</Link></button>
           <button><Link className="nav-link" to="/addProduct">Add Product</Link></button>
        </div>
        </div>
    );
};

export default Admin;