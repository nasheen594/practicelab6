import React from "react"
import Nav from "../Nav";
import Footer from "./Footer";

import {data} from '../data.js';

function Deals(){

    return(

	<>

        <Nav/>

        
		<h1> this is Deals page</h1>
        {data.map((book, key) => {
        return <p key={key}>{book.name}</p>;
      })}
            
        


    

    
		
        <Footer/>
	
    </>

    );

        
    
}



export default Deals;

