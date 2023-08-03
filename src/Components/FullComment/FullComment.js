import {useEffect, useState} from "react";

function FullComment({userID}) {
    let [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}` )
            .then(value => value.json())
            .then(allPosts => {
                setPost(allPosts)
            })
    }, [userID])

    console.log(post)
    return (
        <div className="FullComment">
            <p>title - {post.title}</p>
        </div>
    );
}

export default FullComment;
