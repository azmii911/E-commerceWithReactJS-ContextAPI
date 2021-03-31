import React,{useEffect} from 'react';
import './App.css';
import Footer from './compo/Footer/Footer';
import Header from './compo/Header/Header';
import ProductGrid from './compo/ProductsGrid/ProductGrid';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './compo/Checkout/Checkout.js';
import Cart from './compo/Cart/Cart';
import Login from './compo/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Shop from './compo/Shop/Shop';


function App() {
  const [{user},dispatch] = useStateValue();

    useEffect(() => {
      auth.onAuthStateChanged((user => {
        if(user)//Logged-IN
        {
          dispatch({
            type:'SET_USER',
            user:user,
          })
          console.log("User isss Logged innn >>>",user);
        }
        else{//Logged-OUT
          dispatch({
            type:'SET_USER',
            user:null,
          })
          console.log("User isss Logged OUT or not logged in >>>",user?.email);

        }
      }))
     }, [])
  

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        
        <Route path="/cart">
          <Cart/>
        </Route> 

        <Route path="/shop">
          <Shop/>
        </Route>
        
        
        <Route path="/login">
          <Login/>
        </Route> 
        
        <Route path="/">
          <Home/>
        </Route>

        
      </Switch>
          <Footer/>      
      </div>
    </Router>
  );
}

export default App;
