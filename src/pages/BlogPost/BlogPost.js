import React from 'react';
import posts from '../../data/posts.json';
import { useParams } from "react-router-dom";

function BlogPost() {
    const { blogId } = useParams();
    const blog = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <>

          <h1>{ blog.title }</h1>
            <h4>{ blog.date }</h4>
            <p>{ blog.content }</p>

        </>
    )
}


export default BlogPost;