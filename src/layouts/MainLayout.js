import {Header} from "../components";
import {Outlet} from 'react-router-dom'

function MainLayout() {

    return (
        <div className="MainLayout">
        <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};
