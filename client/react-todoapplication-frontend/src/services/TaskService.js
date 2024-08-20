import axios from 'axios'


// const TASK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tasks/';
const TASK_BASE_REST_API_URL = "https://todoapplication-production-9583.up.railway.app/api/v1/tasks/"


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
    
    deleteTask(id){
        return axios.delete(TASK_BASE_REST_API_URL + "delete/" + id)
    }

    updateStatus(task, newStatus){
        return axios.post(TASK_BASE_REST_API_URL + newStatus, task);
    }

    updateTaskDescription(task, newDescription){
        const headers = {updateDescription: newDescription}
        return axios.put(TASK_BASE_REST_API_URL + "modifyDescription", task, {headers});
    }
    getAllListName(listName){
        return axios.get(TASK_BASE_REST_API_URL + listName)
    }

    setAllTasksIncomplete(listName){
        console.log(TASK_BASE_REST_API_URL + listName + "/Incomplete")
        return axios.post(TASK_BASE_REST_API_URL + listName + "/Incomplete");

    }

}

export default new TaskService();