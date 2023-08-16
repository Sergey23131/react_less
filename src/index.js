import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

let initState = {
    isLoading: false,
    cars: []
}

const carReducer = (state = initState, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {...state, isLoading: true};

        case  'SET_CARS': {
            return {...state, cars: [...action.payload]};
        }

        case  'SAVE_CARS': {
            return {...state, cars: state.cars};
        }

        default:
            return state

    }
}

let store = createStore(carReducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
