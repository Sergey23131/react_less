import {Link,Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="Layout">
            <h1>Layout</h1>
            <ol>
                <li>
                    <Link to={'users'}>users page</Link>
                </li>
                <li>
                    <Link to={'posts'}>posts page</Link>
                </li>
                <li>
                    <Link to={'comments'}>comments page</Link>
                </li>
            </ol>
            <div>
                <h3>sub view</h3>
                <Outlet/>
            </div>
        </div>

    );
}

export default Layout;
