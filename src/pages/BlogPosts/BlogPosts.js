import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";


const BlogPosts = () => {

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <p>Aantal blogposts: {posts.length}</p>
                    <ul>
                        { posts.map( ( post ) => {
                            return (
                                <li key={ post.id }><Link to={ "/blogposts/" + post.id }>{ post.title }</Link>
                                </li>
                            )
                        })}
                    </ul>
        </>
    );
};

export default BlogPosts;