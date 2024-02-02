import React, { useState } from 'react'

function CarArray() {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar () {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar]) // c is another naming convention 

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    function handlRemoveCar (index) {
        setCars(c => c.filter((_, i) => i !== index) )
    }
    function handleYearChange (event) {
        setCarYear(event.target.value)
    }
    function handleMakeChange (event) {
        setCarMake(event.target.value)
    }
    function handleModelChange (event) {
        setCarModel(event.target.value)
    }
  return (
    <div className='container mx-auto shadow-xl mt-4 pt-4'>
            <h2 className='text-center'>List of Car objects</h2>
            <div className="">
                <ul>
                    {cars.map((car, index) => 
                        <li key={index} onClick={() => handlRemoveCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col">
                <input type="number" value={carYear} onChange={handleYearChange} 
                className='border-2' />
                <input type="text" value={carMake} onChange={handleMakeChange} 
                className='border-2'/>
                <input type="text" value={carModel} onChange={handleModelChange} 
                className='border-2'/>
                <button onClick={handleAddCar}>add car</button>
                </div>
            </div>
    </div>
  )
}

export default CarArray