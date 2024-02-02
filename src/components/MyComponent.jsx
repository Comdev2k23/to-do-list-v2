import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("")

    function handleChange (event) {
        setName(event.target.value)
    }

    const updateName = () => {
      setName(name)
    }
  return (
    <div className="container mx-auto">
        <div className="">
              <input type="text" placeholder='input name' 
              value={name} onChange={handleChange} />
              <p>name: {name} </p>

              <button onClick={updateName}>update name</button>
        </div>
    </div>
  )
}

export default MyComponent