import React, { useState } from 'react'


function ToDoList() {

    const [tasks, setTasks] = useState([
        
    ])
    const [newTasks, setNewTasks] = useState("")

    function handleInputChange (event) {
        setNewTasks(event.target.value)
    }
    function handleAddTask () {
       if(newTasks.trim() !== "") {
        setTasks(t => [...t, newTasks])
        setNewTasks('')
       }
    }
    function handleRemoveTask (index) {
        
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }
    function moveTaskUp (index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] =
            [updatedTasks[index -1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown (index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

  return (
   <div className="bg-slate-500 h-screen pt-8">

<div className='container mx-auto shadow-xl bg-red-300 
                rounded-lg pt-4'>
            <h1 className='text-5xl font-poppins font-bold 
            text-center text-purple-500'>To-Do-List 📝</h1>
            <div className="flex justify-center pt-6 gap-4">
                <input type="text" 
                 placeholder='Enter a task...'
                 value={newTasks}
                 onChange={handleInputChange}
                 className='rounded-full pl-4'
                 />
                 <button onClick={handleAddTask} 
                 className='bg-green-500 text-white 
                 p-2 rounded-lg font-bold font-poppins 
                 hover:bg-green-600'>add</button>
            </div>

           <div className="flex justify-center py-6 font-semibold 
                            font-poppins text-2xl">
                <ol className='list-decimal'>
                    {tasks.map((task, index) => 
                 
                       <li key={index} className='py-2'>
                        {task} <button onClick={() =>
                        handleRemoveTask(index)} 
                        className='ml-4 text-lg bg-red-500 text-white 
                        font-normal px-2 rounded-lg hover:bg-red-600'>delete</button>
                        <button onClick={()=> moveTaskUp(index)} 
                        className='hover:opacity-60'>⬆️</button>
                        <button onClick={()=> moveTaskDown(index)} 
                         className='hover:opacity-60'>⬇️</button>
                    </li>)}
                </ol>
           </div>
    </div>
   </div>
  )
}

export default ToDoList