import {useLocation} from "react-router-dom";

function UserInfo() {

    let location = useLocation()
    let {state} = location;
    console.log(state)
    return (
        <div className="UserInfo">
            <h3>{state.email}</h3>
            <h3>{state.phone}</h3>
        </div>
    );
}

export default UserInfo;
