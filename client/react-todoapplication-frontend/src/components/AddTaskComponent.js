import React, { useEffect, useState } from 'react'
import TaskService from '../services/TaskService'
import {Link, useNavigate,useSearchParams} from 'react-router-dom'

const AddTaskComponent = () => {

    const [description, setDescription] = useState('')
    const [searchParams] = useSearchParams();
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    // Retrieve params from URL
    const listName = searchParams.get('name')

    useEffect(() => {
        if (listName == null || listName.trim() === ''){
            navigate(-1);
        }
    })
    const saveTask = (e, status) => {
        e.preventDefault();

        const task = {description, status, listName}
        if (description !== null && description.trim() !== ''){
            setErrorMessage('')
            TaskService.getNextTaskNumber().then((response) => {
                TaskService.createNewTask({...task, taskNumber: response.data}).then((response) => {
                    console.log(response.data)
                    navigate(-1)
                }).catch(error => {
                    console.log("Error has occurred within createNewTask: " + error);
                });
            }).catch(error => {
                console.log("Error has occurred during saveTask: " + error);
            });
        } else {
            setErrorMessage("Invalid Description. Must be length 1 or more character(s)")
        }

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
                                    className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                                    value = {description}
                                    onChange = {(e) => setDescription(e.target.value)}
                                >
                                </input>
                                {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
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
