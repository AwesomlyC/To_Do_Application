import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService'
const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        
        TaskService.getAllTask().then((response) => {
            setTasks(response.data);
            console.log(response.data);

        }).catch(error =>{
            console.log("ERROR: " + error);
        })
    }, [])
    
    
    return (
        <div className = "container">
            <h2 className='text-center'> List Tasks</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Task Id</th>

                    <th>Task Description</th>

                    <th>Task Status</th>
                </thead>
                <tbody>
                    {
                        tasks.map(
                            task => 
                                <tr key = {task.id}>
                                    <td> {task.id} </td>
                                    <td> {task.task} </td>
                                    <td> {String(task.completed)} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListTaskComponent