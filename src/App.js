import Posts from "./Components/Posts/Posts";
import FullComment from "./Components/FullComment/FullComment";
import {useEffect, useState} from "react";
import './App.css'

function App() {
    let [commentID, setCommentID] = useState(null)
    useEffect(() => {

    }, [])
    const userIDComment = (id) => {
        setCommentID(id);
    }

    return (
        <div className="App">
            <Posts userIDComment={userIDComment}/>
            {
                commentID && (<FullComment userID={commentID}/>)
            }
        </div>
    );
}

export default App;
