import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ()=>{
    return (<>
        {<Header/>}
        {<Outlet/>}
        <div style={{clear:"both"}}/>
        {<Footer/>}
    </>
    )
}

export default Layout;