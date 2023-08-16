const baseUrl = 'http://owu.linkpc.net/carsAPI/v1/cars'

const getCars = () => {
    return fetch(baseUrl).then(value => value.json())
}

const saveCars = (car) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
    })
}

export {getCars, saveCars}
