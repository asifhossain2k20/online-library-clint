import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';

const Login = () => {
    const [user,setUser]=useState({
        isSignIn: false,
        name:'',
        email:'',
        password:'',
        photo:''
      })
      initializeLoginFramework()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location=useLocation();
  
    let { from } = location.state || { from: { pathname: "/" }};
  
    const googleSignIn=()=>{
      handleGoogleSignIn()
      .then(res=>{
        handleResponse(res,true)
      })
    }
  
    const signOut=()=>{
      handleSignOut()
      .then(res=>{
        handleResponse(res,false)
      })
  
    }
    const handleResponse=(res,redirect)=>{
        setUser(res);
       setLoggedInUser(res);
       if(redirect){
         history.replace(from);
       }
       
    }
    return (
        <div className="container d-flex justify-content-center">
            <button className="m-2 btn btn-primary" onClick={googleSignIn}>
                     <h3>Sign In Using Google</h3></button>
                <br />
     
      </div>
        
    );
};

export default Login;