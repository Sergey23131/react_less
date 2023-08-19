import {useSelector} from "react-redux";
import css from './Header.module.css';


function Header() {
    useSelector(state => state.count1)

    return (
        <div className={css.Header}>
        Rick and morty
        </div>
    );
}

export {Header};
