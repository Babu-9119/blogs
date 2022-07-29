import React from "react";
import './Post.css';
function Post({title,body,author,image,color}) {
    return(
        <div className="post-container" style={{backgroundColor:color}}>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>author:{author}</p>
            <img src={image} alt="testImage" />
            <h1>{color}</h1>
        </div>
    )
}

export default Post;