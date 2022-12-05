import React, { useState } from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Nav from '../src/components/Nav/Nav'
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import BlogPosts from '../src/pages/BlogPosts/BlogPosts';
import BlogPost from '../src/pages/BlogPost/BlogPost';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
        <Nav isAuthenticated={isAuthenticated} toggleIsAuthenticated ={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/login" element={ <Login toggleIsAuthenticated={toggleIsAuthenticated}/> } />
            <Route path="/blogposts" element={ isAuthenticated ? <BlogPosts/> : <Navigate to="/login"/> } />
            <Route path="/blogposts/:blogId" element={ <BlogPost/> } />
        </Routes>
    </>
  );
}

export default App;
