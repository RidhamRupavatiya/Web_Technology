import { Link } from "react-router-dom"

const Header = ()=>{
    return(<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-1">
                <li class="nav-item">
                    <button class="btn btn-outline-primary" type="button">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link> 
                    </button>&nbsp;&nbsp;
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-secondary" type="button">
                    <Link to ="/About" class="nav-link">About</Link>
                    </button>&nbsp;&nbsp;
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-success" type="button">
                    <Link to ="/Faculties" class="nav-link">Faculties</Link>
                    </button>&nbsp;&nbsp;
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-danger" type="button">
                    <Link to="/Contact" class="nav-link">ContactUs</Link>
                    </button>&nbsp;&nbsp;
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-warning" type="button">
                    <Link to="/Addmission" class="nav-link">Addmission</Link>
                    </button>&nbsp;&nbsp;
                </li>
               
                <li class="nav-item">
                    <button class="btn btn-outline-info" type="button">
                    <Link to="faculties/add" class="nav-link">Add Faculty</Link>
                    </button>&nbsp;&nbsp;
                </li>
        </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>)
}
export default Header