import { Link , Outlet } from 'react-router-dom';
import Footer from './Footer';
//import Footer from './Footer';
function Layout(){
    return (
        <>
     <div className = "header">
		<div className = "logo">
			<img src = "https://darshan.ac.in//Content/media/DU_Logo.svg" />
		</div>
        
        <div className = "Menu">
            <div className = "Home">
                <Link to="/">Home</Link>
            </div>
            <div className="About">
                <Link to="/about">About</Link>
            </div>
            <div className="Contact">
                <Link to="/contact">Contact</Link>
            </div>
            <div className="Addmission">
                <Link to="/addmission">Addmision</Link>
            </div>
            <div className="Faculty">
                <Link to="/faculty">Faculty</Link>
            </div>
        </div>
    </div>

    <div className="contant">
		<div className="sidebar">
			<h4>Side Bar</h4>
			<div className="sideobject">Research & inovating</div>
			<div className="sideobject">For Gtu Students</div>
			<div className="sideobject">Alumni</div>
			<div className="sideobject">NIRF</div>
			<div className="sideobject">Contact Us</div>
		</div>
        <div class="main">
			<h4>main contant</h4>
        </div>
    </div>
    <Outlet />

    <div style={{clear:"both"}}></div>
    
    <div className="footer">
		{<Footer/>}
	</div>  
    </>
    );
}

export default Layout;