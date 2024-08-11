package com.personal.To_Do_Application;

import com.personal.To_Do_Application.model.Task;
import com.personal.To_Do_Application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

// Service and Component are similar to a Bean
@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public List<Task> getAllTask(){
        return taskRepository.findAll();
    }

    public Task findTaskById(Long id){
        return taskRepository.getById(id);
    }

    public Task updateStatus(Task task, String new_status){
        task.setStatus(new_status);
        return taskRepository.save(task);
    }

    public void deleteTask(Task task){
        taskRepository.delete(task);
    }

    public Task getByTaskDescription(String taskDescription){return taskRepository.getByTaskDescription(taskDescription);}
    public Task updateTask(Task task){
        return taskRepository.save(task);
    }

    public Long getCount(){
        return taskRepository.count();
    }

    // Looks for the maximum task number within the documents
    // Returns the maximum found task number
    public Long getMaxTaskNumber(){
        Query query = new Query();
        query.with(Sort.by(Sort.Direction.DESC, "taskNumber"));
        query.limit(1);
        Task maxTask = mongoTemplate.findOne(query, Task.class);
        return (maxTask != null) ? maxTask.getTaskNumber() : 0;
    }

}
