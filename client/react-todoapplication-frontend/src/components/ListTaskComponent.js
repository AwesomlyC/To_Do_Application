import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService'
import { Link, useSearchParams } from 'react-router-dom'
const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])
    const [searchParams] = useSearchParams();
    const listName = searchParams.get('name')


    useEffect(() => {
        getAllListName(listName)
    }, [])
    
    const getAllListName = () =>{
        TaskService.getAllListName(listName).then((response) => {
            setTasks(response.data);
            console.log(response.data);

        }).catch(error =>{
            console.log("ERROR: " + error);
        })
    }

    const deleteTask = (listName, taskDescription, status) => {
        console.log("Deleting Task: "  + listName + " " + taskDescription + " " + status);
        TaskService.deleteTask(listName, taskDescription, status).then((response) =>{
            getAllListName(listName);
        }).catch(error =>{
            console.log("Error - Unable to delete " + taskDescription);
        });
    }

    const updateStatus = (task, newStatus) => {
        console.log("Updating the status for task: " + task + " --> To status: " + newStatus);
        TaskService.updateStatus(task, newStatus).then((response) =>{
            getAllListName(listName);
        }).catch(error =>{
            console.log("Error - Unable to update status " + task);
        });
    }


    return (
        <div className = "container">
            <h2 className='text-center'>WhatsOnTheList</h2>
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
                                    <td> {task.status} </td>
                                    <td>
                                        <button className='btn btn-primary' onClick={()=>updateStatus(task, (task.status === "Incomplete") ? "Complete" : "Incomplete")}>Update Status</button>
                                        <button className='btn btn-danger' style = {{marginLeft:"10px"}} onClick={()=>deleteTask(task.listName, task.task, task.status)}>Delete</button>
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