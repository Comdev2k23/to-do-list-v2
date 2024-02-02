import React, { useState } from 'react'

function ColorPicker() {

    const [color, setColor] =  useState("#FFFFFF")

    function handleColorChange (event) {
        setColor(event.target.value)
    }

  return (
    <div className='container mx-auto shadow-xl mt-4 pb-4 
    bg-slate-200'>
            <h1 className='text-center font-mono 
            font-bold text-3xl pt-4'>Color Picker</h1>
            <div className="flex-col text-center pt-5 mx-20 pb-4 rounded-full" style={{backgroundColor: color}}>
                <p className='font-bold '>Selected Color: {color}</p>
            </div>
            <div className="text-center">
            <label style={{padding: 7}}> 
                    Select color:
                </label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
    </div>
  )
}

export default ColorPicker