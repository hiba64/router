import React from 'react';
import {Link} from 'react-router-dom';


function nav() {

  const navStyle={
      color:'white',
      textDecoration:"none",


  }
  return (
    
      <ul className="nav-links">
          
          <li><Link to= "/home">Home</Link></li>
       
          
          <li><Link to ="/category">Category </Link></li>
         
          <Link to ="/products">
          <li>Products</li>
          </Link>
          <Link to ="/adminArea">
          <li>Admin Area</li>
          </Link>
      </ul>
  
  );
}

export default nav;