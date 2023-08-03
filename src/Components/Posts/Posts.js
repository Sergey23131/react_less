import {useEffect, useState} from "react";
import Post from "../Post/Post";


function Posts({userIDComment}) {
    let [users, setUsers] = useState([]);

    /*
        'https://api.spacexdata.com/v3/launches/'
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => {
                /*const filtered = allPosts.filter(item => item.launch_year !== '2020')
                setPosts(filtered);*/
                setUsers(allUsers)
            })
    }, [])


    return (
        <div className="Posts">

            {
                users.map(value => <Post value={value} userIDComment={userIDComment} key={value.id}/>)
            }
        </div>
    );
}

export default Posts;
