import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import "../App.css"
const ListTaskComponent = () => {

    // Setters of States
    const [tasks, setTasks] = useState([])
    const [searchParams] = useSearchParams();

    const [description, setDescription] = useState("null");
    const [editTaskId, setEditTaskId] = useState(null);

    // Retrieve params from URL
    const listName = searchParams.get('name')
    const navigate = useNavigate();

    useEffect(() => {
        if (listName == null || listName.trim() === ''){
            navigate("/");
        }
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

    const deleteTask = (listName, taskDescription, status, id) => {
        console.log("Deleting Task: "  + listName + " " + taskDescription + " " + status);
        TaskService.deleteTask(listName, taskDescription, status, id).then((response) =>{
            getAllListName(listName);
        }).catch(error =>{
            console.log("Error - Unable to delete " + taskDescription);
        });
    }

    const updateStatus = (task, newStatus) => {
        TaskService.updateStatus(task, newStatus).then((response) =>{
            getAllListName(listName);
        }).catch(error =>{
            console.log("Error - Unable to update status " + task);
        });

    }

    const handleEditClick = (id, currentTaskDescription) =>{
        setEditTaskId(id);
        setDescription(currentTaskDescription)
    }

    const handleSaveClick = (task) => {
        if (description != null && description.trim() !== ''){
            TaskService.updateTaskDescription(task, description).then((response) => {
                getAllListName(listName);
            }).catch(error => {
                console.log("Error - Unable to Update Properly " + error);
            })
        }

        setEditTaskId(null)
        setDescription("")
    }


    return (
        <div className = "container">
            <h2 className='text-center'>Your List: {<text className='text-primary'>{listName}</text>}</h2>
            <Link to ={`/add-task?name=${listName}`} className = "btn btn-primary mb-2">Add Task</Link>
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
                                <tr key = {task.id} className={task.status}>
                                    <td> {task.taskNumber} </td>
                                    {task.id === editTaskId ? (
                                        <div>
                                        <input 
                                        className='form-control'
                                          type="text" 
                                          value={description} 
                                          onChange={(e) => setDescription(e.target.value)} 
                                          placeholder="Enter new description" 
                                        />
                                        <button className='btn btn-primary' onClick={() => handleSaveClick(task)} style={{marginLeft:"10px", marginTop: '5px'}}>Save</button>
                                        </div>
                                    ) : (
                                        <td> {task.description} </td>

                                    )}
                                    <td> {task.status} </td>
                                    <td>
                                        <button className='btn btn-primary' onClick={()=>updateStatus(task, (task.status === "Incomplete") ? "Complete" : "Incomplete")}>Update Status</button>
                                        <button className='btn btn-danger' style = {{marginLeft:"10px"}} onClick={()=>deleteTask(task.listName, task.description, task.status, task.id)}>Delete</button>
                                        <button className='btn btn-success'  style = {{marginLeft: "10px"}} onClick={() => handleEditClick(task.id, task.description)}>Edit</button>
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