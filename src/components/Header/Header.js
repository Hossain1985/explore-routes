import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () =>{
    return(
        <div className="header">
<nav>
           <Link to = '/home'>Home</Link>
           <Link to = '/about'> About</Link>
           <Link to = '/friends'>Friends</Link>
           <Link to = '/product'>Product</Link>
          

</nav>
           <h3>I am Common Header</h3>
        </div>
    )

}

export default Header;