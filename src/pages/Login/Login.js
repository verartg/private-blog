//import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import users from '../../data/users.json';

function Login ({ toggleIsAuthenticated }) {
    const navigate = useNavigate();

//onClick wil ik checken of de input overeenkomt met database.
// Als die overeenkomen, dan toggle en navigate. zo niet, dan foutmelding.
    function signIn() {
        toggleIsAuthenticated(true);
        navigate("/blogposts");
    }

   // const error = {
  //      unamepass: "invalid credentials"
  //  };

   // const handleSubmit = (event) => {
   //     event.preventDefault();

   //     const userData = users.find((user) =>
   //         user.name === username.value);

   //     if (userData) {
   //         if(userData.password !== )
     //   }

    //<form onSubmit={handleSubmit}>
    //            </form>
    return (
        <>
            <h1>Login Pagina</h1>

                <label htmlFor="username" className="inputlabel">
                    Gebruikersnaam:
                    <input type="text" id="username" name="username"/>
                </label>
                <label htmlFor="password" className="inputlabel">
                    Wachtwoord:
                    <input type="password" id="password" name="password"/>
                </label>
                <button type="button" onClick={signIn}>Inloggen</button>
        </>
    );
}

export default Login;