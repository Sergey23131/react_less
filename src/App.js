import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/users";
import UserInfo from "./components/userInfo/UserInfo";


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
