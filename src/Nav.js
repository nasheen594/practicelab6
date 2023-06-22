import React from "react"
import { Link } from "react-router-dom";

function Nav(){

    return(

	<nav>
		<Link to="/">Home </Link>
		<Link to="/contactus">Contact Us </Link>
		<Link to="/deal">Today's Deal</Link>
		<Link to="/login">Log In</Link>
		<Link to="/signup">Sign Up Here</Link>
	</nav> 	

    );

        
    
}

export default Nav;

