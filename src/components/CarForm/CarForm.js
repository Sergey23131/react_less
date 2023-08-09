import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {useEffect} from "react";

function CarForm({setAllCars, updateCar}) {
    const {reset, handleSubmit, register, setValue, formState: {errors, isValid}} = useForm({mode: 'onSubmit'})

    useEffect(() => {
        if (updateCar) {
            Object.entries(updateCar).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key, value)
                }
            })
        }
    }, [updateCar])

    const save = async (car) => {
        const {data} = await carService.create(car)
        setAllCars(prev => !prev)
        reset()
    }

    const update = async (car) => {
        console.log(car.id, car)
        const {data} = await carService.updateById(updateCar.id, car)
        setAllCars(prev => !prev)
        reset()

    }

    return (
        <form className="CarForm" onSubmit={handleSubmit(updateCar ? update : save)}>
            <input type="text"
                   placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Brand should contain with letters'
                },
                required: {value: true, message: 'required'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {

                    valueAsNumber: true,
                    min: 0,
                    max: 1000000,
                    required: true
                }
            )}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true, min: {
                    value: 1990,
                    message: 'min is 1990'
                }, max: {value: new Date().getFullYear(), message: 'max is 2023'},
                required: true
            })}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button>{updateCar ? 'Update' : 'Create'}</button>

        </form>
    );
}

export default CarForm;
