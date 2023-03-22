import { Link } from "react-router-dom";

const Header = ()=>{
    return(<>
	<div class="header">
    	<div class="logo">
			<img src="https://darshan.ac.in//Content/media/DU_Logo.svg"/>
		</div>
		<div class="Menu">
			<div class="Home">
				<Link to="/" class="link">Home</Link>
			</div>
			<div class="About">
				<Link to="./about" class="link">About</Link>
			</div>
			<div class="Contact">
				<Link to="/contact" class="link">Contact</Link>
			</div>
			<div class="Addmission">
				<Link to="/addmission" class="link">Addmission</Link>
			</div>
			<div class="Faculty">
				<Link to="/faculty" class="link">Faculty</Link>
			</div>
		</div>
	</div>


	<div class="contant">
		<div class="sidebar">
			<h4>Side Bar</h4>
			<div class="sideobject">Research & inovating</div>
			<div class="sideobject">For Gtu Students</div>
			<div class="sideobject">Alumni</div>
			<div class="sideobject">NIRF</div>
			<div class="sideobject">Contact Us</div>
		</div>
		<div class="main">
			<h4>main contant</h4>
		</div>
	</div>
    </>
    )
}

export default Header;