import React from 'react'
import { useStateValue } from '../../StateProvider';
import {Link} from 'react-router-dom';
import './Header.css'
import { auth } from '../../firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const authHandler = () =>{
      auth.signOut();
    }
    return (
      <div className="navbar-light bg-light">
<nav className="navbar sticky-top navbar-expand-lg container-fluid">
  <div className="container-fluid">
    <Link className="navbar-brand mt-1" to="/">
      <h4 style={{fontWeight:'bolder'}}>E-Commerce</h4>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <a className="nav-link active" ht >Home</a>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/shop">
            <a className="nav-link" ht >Shop</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/checkout">
          <a className="nav-link">Checkout</a>
          </Link>
        </li>
        
       
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search a product" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
     
      <div className="d-flex mx-3 px-2">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
            <div class="fs-6">
              <Link className="nav-link" to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
              </svg>
              <div className="badge">
                {basket?.length}
                </div>
              </Link>
            </div>
            </li>
            <li className="nav-item">
            <div class="fs-6 loginn" onClick={authHandler}>
            <Link className="nav-link" to={!user && "/login"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            {
              user?`Hello, ${user?.displayName} Logout?`
              // user?`Logout`
              :
              'Login'
            }
            </Link>
              
            </div>
            </li>
        </ul>
       
      </div>
  </div>
</nav>
</div>
    )
}

export default Header
