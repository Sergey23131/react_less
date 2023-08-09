import {carService} from "../../services/car.service";

function Car({car, setUpdateCar, setAllCars}) {
    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
     await carService.deleteById(id);
        setAllCars(prev => !prev)

    }
    return (
        <div className="Car">
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={()=>deleteCar(id)}>Delete</button>
        </div>
    );
}

export default Car;
