import {ComponentOne, ComponentTwo, Header} from "./components";
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CharacterPage} from "./pages";


function App() {
    return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'characters'}/>}/>
            <Route path={'characters'} element={<CharacterPage/>}/>
            </Route>
    </Routes>
    );
}

export {App};
