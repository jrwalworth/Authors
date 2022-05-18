import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <>
            <Navbar className="m-2 d-flex justify-content-between" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="ms-3" href="/">Favorite Authors</Navbar.Brand>
                <div className="d-flex justify-content-center align-items-center">
                    {/* <NavLink className="nav-link small" to="/">Home</NavLink> */}
                    {/* <span className="small nav-div"> | </span>
                    <NavLink className="nav-link small" to="/">API</NavLink> */}
                </div>
                {/* <input type="text" className="me-3 nav-search" placeholder="Search" onChange={() => {}}/> */}
            </Navbar>
            
        </>
        
    );
}

export default Nav;
