import {Link} from "react-router-dom";

function User({item}) {

    return (
        <div className="User">

            <Link to={item.id.toString()} state ={{...item}}>{item.name}</Link>
        </div>
    );
}

export default User;
