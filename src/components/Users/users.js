import {useEffect, useState} from "react";
import User from "../user/user";
import {Outlet} from "react-router-dom";

function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])

    return (
        <div className="Users">
            {
                users.map(value => <User  item={value} key={value.id}/>)
            }

            <h4>user detail</h4>
            <Outlet/>
        </div>
    );
}

export default Users;
