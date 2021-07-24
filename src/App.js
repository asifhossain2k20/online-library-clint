import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import MannageBooks from "./components/MannageBooks/MannageBooks";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import User from "./components/User/User";


export const UserContext=createContext();

function App() {

  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <div className="App">
         <Header></Header>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/user">
              <User />
          </PrivateRoute>
          <PrivateRoute path="/checkOut">
              <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/mannageBooks">
              <MannageBooks />
          </PrivateRoute>
          <PrivateRoute path="/admin">
              <Admin/>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
