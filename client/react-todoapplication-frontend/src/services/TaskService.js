import axios from 'axios'


const TASK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tasks/';
// const TASK_BASE_REST_API_URL = "https://todoapplication-production-9583.up.railway.app/api/v1/tasks/"


class TaskService{

    getAllTask(){
        return axios.get(TASK_BASE_REST_API_URL);
    }

    createNewTask(task){
        return axios.post(TASK_BASE_REST_API_URL, task)
    }

    getTotalCount(){
        return axios.get(TASK_BASE_REST_API_URL + "count")
    }

    getNextTaskNumber(){
        return axios.get(TASK_BASE_REST_API_URL + "getNewNumber")
    }
    
    deleteTask(listName, taskDescription, status){
        return axios.delete(TASK_BASE_REST_API_URL + listName + "/" + taskDescription + "/" + status)
    }

    updateStatus(task, newStatus){
        return axios.post(TASK_BASE_REST_API_URL + newStatus, task);
    }

    getAllListName(listName){
        return axios.get(TASK_BASE_REST_API_URL + listName)
    }

}

export default new TaskService();