import React from "react"
import Nav from "../Nav";
import Footer from "./Footer";

function Home(){

    return(

	<div>

        <Nav/>

        <article>
		<section>
			<h1> Welcome to my site. Please come in and stay awhile.</h1>
		
			
			
			
			<p>
				i.	I started this web site because Christmas has always been my favorite holiday. Last year, I started selling some of my favorite Christmas products and they’ve become quite a hit.
			</p>
			
			<p>
				ii.	If you click on the personal link, you can browse my favorite Christmas pictures, stories and films. If you join my email list, I will keep you you up-to-date on all things Christmas.
			</p>
			
			
			<h2> Product Categories </h2>
			<ul>
				<li> Decorations</li>	
				<li> Recipes</li>
				<li> Toys </li>
				<li> Unique Gift Ideas</li>
				<li> Wrapping Paper</li>
			</ul>
			
			
			<dl>
				<dt>Coffee</dt>
				<dd>Black hot drink</dd>
				<dt>Milk</dt>
				<dd>White cold drink</dd>
			</dl>
			
			<h3> My guarantee </h3>
			
			<p> 
				If you aren't completely satisfied with everything you buy from my site, you can return it for a full refund. 
				<br/>
				<em>No questions asked!</em>
			</p>
			
				</section >
			<a href="https://www.google.com/maps/place/Florida+Institute+of+Technology/@28.0646888,-80.6252107,17z/data=!3m1!4b1!4m5!3m4!1s0x88de1204fc52a6f7:0x37ba57635d6a3f15!8m2!3d28.0646888!4d-80.623022
			">Google Maps - FIT</a> 
			
		

	</article> 

	<Footer/>
    </div>
    );

        
    
}

export default Home;

