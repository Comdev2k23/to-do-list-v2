import React, { useState } from 'react'

function Car() {

    const [car, setCar] = useState({
        year: 2022,
        make: "elon",
        model: "tesla",
    })


    function handleYearChange (event) {
        setCar(c => ({...c, year: event.target.value}))
    }
    function handleMakeChange (event) {
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange (event) {
        setCar(c => ({...c, model: event.target.value}))
    }

  return (
    <div className='container mx-auto shadow-2xl bg-slate-200 mt-4'>
        <p className='text-center'>Your favorite car is {car.year} {car.make} {car.model}</p>

        <div className="flex flex-col items-center gap-3">
        <input type="number" value={car.year} onChange={handleYearChange} 
        className='border-2'/>
        <input type="text" value={car.make} onChange={handleMakeChange}
        className='border-2' />
        <input type="text" value={car.model} onChange={handleModelChange}
        className='border-2' />
        </div>
    </div>
  )
}

export default Car