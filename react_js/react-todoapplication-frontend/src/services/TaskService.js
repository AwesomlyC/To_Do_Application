import axios from 'axios'


const TASK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tasks/';
// const TASK_BASE_REST_API_URL = 'https://to-do-application-weld-six.vercel.app/api/v1/tasks';


class TaskService{

    getAllTask(){
        return axios.get(TASK_BASE_REST_API_URL);
    }

    createNewTask(task){
        console.log("Create New Task: "  + task);
        // const count = this.getTotalCount(task);
        // console.log("Count: " + count);

        // task = {...task, taskNumber: count};
        // console.log("Modified Task " + task);
        return axios.post(TASK_BASE_REST_API_URL, task)
    }
    getTotalCount(task){
        return axios.get(TASK_BASE_REST_API_URL + "count")
    }
    deleteTask(taskDescription){
        return axios.delete(TASK_BASE_REST_API_URL + taskDescription)
    }
}

export default new TaskService();