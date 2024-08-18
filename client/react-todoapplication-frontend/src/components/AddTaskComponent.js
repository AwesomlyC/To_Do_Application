import React, { useState } from 'react'
import TaskService from '../services/TaskService'
import {Link, useNavigate,useSearchParams} from 'react-router-dom'

const AddTaskComponent = () => {

    const [description, setDescription] = useState('')
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    // Retrieve params from URL
    const listName = searchParams.get('name')

    const saveTask = (e, status) => {
        e.preventDefault();

        const task = {description, status, listName}

        console.log("Sending Task: " + task)
        TaskService.getNextTaskNumber().then((response) => {
            TaskService.createNewTask({...task, taskNumber: response.data}).then((response) => {
                console.log(response.data)
                // navigate('/tasks')
                navigate(-1)
            }).catch(error => {
                console.log("Error has occurred within createNewTask: " + error);
            });
        }).catch(error => {
            console.log("Error has occurred during saveTask: " + error);
        });

    }
    return (
    <div>
        <br /><br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className ='text-center'> Add Task</h2>
                    <div className = 'card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Task Description</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Task Description'
                                    name='taskDescription' 
                                    className = 'form-control' 
                                    value = {description}
                                    onChange = {(e) => setDescription(e.target.value)}
                                >
                                </input>

                            </div>
                            <button className='btn btn-success' onClick={(e) => saveTask(e, "Incomplete")}>Save Task</button>
                            <Link to={`/list?name=${listName}`} style={{marginLeft:'10px'}} className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddTaskComponent
