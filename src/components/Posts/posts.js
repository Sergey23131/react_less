import {useEffect, useState} from "react";
import Post from "../post/Post";
import {Link,Outlet} from "react-router-dom";


function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            })
    }, [])

    return (
        <div className="Posts">
            <h4>post datails</h4>
            <Outlet/>

            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }

        </div>
    );
}

export default Posts;
