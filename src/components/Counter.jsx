import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0) 

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div className='container mx-auto'>
        <div className="flex-col text-center shadow-xl mt-6 pt-4">
                <h2 className='text-2xl'>🧮</h2>
                <h2 className='text-9xl'>{count}</h2>
                <h2>Count:</h2>

        <div className="flex justify-center gap-4 pt-4 pb-4">
            <button className='bg-green-400 border rounded-lg p-2 
            text-slate-600' onClick={()=> increment()}>increment</button>
            <button className='bg-gray-400 border rounded-lg p-2 
            text-slate-700' onClick={()=> decrement()}>decrement</button>
            <button className='bg-red-400 border rounded-lg p-2 
            ' onClick={()=> reset()}>reset</button>
        </div>
        </div>
    </div>
  )
}

export default Counter