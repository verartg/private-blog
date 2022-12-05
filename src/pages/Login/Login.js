import React from 'react';
import { useNavigate} from "react-router-dom";
import users from '../../data/users.json';

function Login ({ toggleIsAuthenticated }) {
    const navigate = useNavigate();


    function signIn() {
        toggleIsAuthenticated(true);
        navigate("/blogposts");
    }

    return (
        <>
            <h1>Login Pagina</h1>
            <form onSubmit="hier-hebben-we-js-voor-nodig">
                <label htmlFor="username" className="inputlabel">
                    Gebruikersnaam:
                    <input type="text" id="username" name="username"/>
                </label>
                <label htmlFor="password" className="inputlabel">
                    Wachtwoord:
                    <input type="password" id="password" name="password"/>
                </label>
                <p id="matchWarning"></p>
                <button type="button" onClick={signIn}>Inloggen</button>
            </form>

        </>
    );
}

export default Login;