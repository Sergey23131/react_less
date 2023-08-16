import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCars} from "./car.api";

const fetchCars = () => async (dispatch) => {
    dispatch({type: 'START_LOADING'})
    let responce = await getCars()
    console.log(responce)
    dispatch({type: 'SET_CARS', payload: responce})
}

function App() {

    let store = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars())
    }, [])


    return (
        <div className="App">
            {
                store.cars.map(value => <div key={value.id}> {value.brand}</div>)
            }

        </div>
    );
}

export default App;
