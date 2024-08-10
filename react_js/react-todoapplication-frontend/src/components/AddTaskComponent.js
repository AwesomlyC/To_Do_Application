import React, { useState } from 'react'
import TaskService from '../services/TaskService'
import {Link, useNavigate} from 'react-router-dom'

const AddTaskComponent = () => {

    const [taskDescription, setTaskDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate();

    const saveTask = (e) => {
        e.preventDefault();

        const task = {taskDescription, completed}

        console.log("Sending Task: " + task)
        TaskService.getTotalCount().then((response) => {
            console.log("Response: " + response.data)
            console.log("Modified response Data: " + {...task, taskNumber: response.data})
            TaskService.createNewTask({...task, taskNumber: response.data}).then((response) => {
                console.log(response.data)
                navigate('/tasks')
            }).catch(error => {
                console.log("Error has occurred within createNewTask: " + error);
            });
        }).catch(error => {
            console.log("Error has occurred during saveTask: " + error);
        });
        // TaskService.createNewTask(task).then((response) => {
        //     console.log(response.data)
        //     navigate('/tasks')
        // }).catch(error => {
        //     console.log("Error has occurred: " + error);
        // });
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
                                    value = {taskDescription}
                                    onChange = {(e) => setTaskDescription(e.target.value)}
                                >
                                </input>

                                <label className='form-label'>Task Status</label>
                                <input 
                                    type='boolean' 
                                    placeholder='Enter Task Status'
                                    name='completed' 
                                    className = 'form-control' 
                                    // value = {completed}
                                    onChange = {(e) => setCompleted(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveTask(e)}>Save Task</button>
                            <Link to='/tasks' className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddTaskComponent
