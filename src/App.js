import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/users";
import UserInfo from "./components/userInfo/UserInfo";
import Posts from "./components/Posts/posts";
import PostDetails from "./components/post-details/PostDetails";


function App() {
    return (
        <div className="App">
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>
            <div>
                <h2>view</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>}/>
                        </Route>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserInfo/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
