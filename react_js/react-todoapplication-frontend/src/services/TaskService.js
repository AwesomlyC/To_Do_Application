import axios from 'axios'


const TASK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tasks/';
// const TASK_BASE_REST_API_URL = 'https://to-do-application-weld-six.vercel.app/api/v1/tasks';


class TaskService{

    getAllTask(){
        return axios.get(TASK_BASE_REST_API_URL);
    }

    createNewTask(task){
        console.log("Create New Task: "  + task);
        return axios.post(TASK_BASE_REST_API_URL, task)
    }
    getTotalCount(){
        return axios.get(TASK_BASE_REST_API_URL + "count")
    }
    getNextTaskNumber(){
        return axios.get(TASK_BASE_REST_API_URL + "getNewNumber")
    }
    deleteTask(taskDescription){
        return axios.delete(TASK_BASE_REST_API_URL + taskDescription)
    }
}

export default new TaskService();