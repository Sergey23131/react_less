import {useNavigate} from "react-router-dom"

function Post({item}) {
    let navigate= useNavigate()

    return (
        <div className="Post">
            <h4>{item.title}</h4>
            <button onClick={()=>{
                navigate(item.id.toString())
            }}>details</button>
        </div>
    );
}

export default Post;
