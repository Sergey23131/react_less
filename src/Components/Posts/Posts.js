import {useEffect, useState} from "react";
import Post from "../Post/Post";


function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allPosts => {
                const filtered = allPosts.filter(item => item.launch_year !== '2020')
                setPosts(filtered);
            })
    }, [])


    return (
        <div className="Posts">

            {
                posts.map(value => <Post value={value} key={value.id}/>)
            }
        </div>
    );
}

export default Posts;
