import React, { useState } from 'react'

function Food() {

    const [foods, setFoods] = useState(
        [
            "Apple",
            "Orange",
            "Banana"
        ]
    )

        function handleAddFood () {
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = ""

            setFoods(f => [...f, newFood] ) //updater function
        }

        function handleRemoveFood (index) {
            setFoods(foods.filter((_, i) => i !== index)) // _ or underscore means ignored
        }

  return (
    <div className=''>
        <h2>List of Foods</h2>
       <div className="">
       <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
       </div>
       <div className="">
                <input type="text" id='foodInput' placeholder='Enter food name' 
                 />
                 <button onClick={handleAddFood}>Add Food</button>
       </div>
    </div>
  )
}

export default Food