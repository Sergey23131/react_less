import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux";


function App() {

    let store = useSelector(state => state)

    let dispatch = useDispatch();

    function onincrement() {
        dispatch(increment())
    }

    function ondecrement() {
        dispatch(decrement())

    }

    function onreset() {
        dispatch(reset())

    }

    return (
        <div className="App">
            <h1>{store}</h1>
            <button onClick={onincrement}>increment</button>
            <button onClick={ondecrement}>decrement</button>
            <button onClick={onreset}>reset</button>

        </div>
    );
}

export default App;
