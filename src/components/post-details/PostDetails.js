import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

function PostDetails() {
    let [post, setPost] = useState();

    let params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(value => value.json())
            .then(value => {

                setPost({...value})
            })
    }, [params.id])
    return (
        <div className="PostDetails">
            <h1>{post.body}</h1>
        </div>
    );
}

export default PostDetails;
