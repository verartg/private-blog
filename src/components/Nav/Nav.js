import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";

const Nav = ( { isAuthenticated, toggleIsAuthenticated } ) => {
    const navigate = useNavigate();
    function signOut() {
        toggleIsAuthenticated(false);
        navigate("/");
    }
    return (
        <>
            <nav className="navbar" >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { !isAuthenticated && <li><Link to="/login">Login</Link></li> }
                    { isAuthenticated && <li><Link to="/blogposts">Blog overzicht</Link></li> }
                    { isAuthenticated && <button type="button" onClick={signOut}>Uitloggen</button> }
                </ul>
            </nav>
        </>
    );
};

export default Nav;