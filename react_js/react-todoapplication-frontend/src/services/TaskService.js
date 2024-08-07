import axios from 'axios'


const TASK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tasks/';

class TaskService{

    getAllTask(){
        return axios.get(TASK_BASE_REST_API_URL);
    }

    createNewTask(task){
        return axios.post(TASK_BASE_REST_API_URL, task)
    }
}

export default new TaskService();