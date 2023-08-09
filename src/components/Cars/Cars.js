import {useEffect, useState} from "react";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

function Cars() {
    const [cars, setCars] = useState([]);
    const [AllCars, setAllCars] = useState(null)
    const [updateCar, setUpdateCar] = useState(null)

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [AllCars])
    return (
        <div className="Cars">
            <CarForm setAllCars={setAllCars} updateCar={updateCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setAllCars={setAllCars}/>)}
        </div>
    );
}

export default Cars;
