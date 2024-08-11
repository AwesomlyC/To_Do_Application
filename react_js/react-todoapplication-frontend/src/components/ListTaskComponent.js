import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService'
import { Link } from 'react-router-dom'
const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getAllTask()
    }, [])
    
    const getAllTask = () =>{
        TaskService.getAllTask().then((response) => {
            setTasks(response.data);
            console.log(response.data);

        }).catch(error =>{
            console.log("ERROR: " + error);
        })
    }
    const deleteTask = (taskDescription) => {
        console.log("Deleting: "  + taskDescription);
        TaskService.deleteTask(taskDescription).then((response) =>{
            getAllTask();
        }).catch(error =>{
            console.log("Error - Unable to delete " + taskDescription);
        });
    }
    return (
        <div className = "container">
            <h2 className='text-center'> List Tasks</h2>
            <Link to ="/add-task" className = "btn btn-primary mb-2">Add Task</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Task Id</th>

                    <th>Task Description</th>

                    <th>Task Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        tasks.map(
                            task => 
                                <tr key = {task.id}>
                                    <td> {task.taskNumber} </td>
                                    <td> {task.task} </td>
                                    <td> {String(task.completed)} </td>
                                    <td>
                                        <button className='btn btn-danger' style = {{marginLeft:"10px"}} onClick={()=>deleteTask(task.task)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListTaskComponent