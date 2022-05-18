import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header(props) {
    const {headerTitle, link, linkText} = props;
    
    return (
        <>
            <h2>{headerTitle}</h2>
            <Link to={link}>{linkText}</Link>
        </>
        
    );
}

export default Header;
