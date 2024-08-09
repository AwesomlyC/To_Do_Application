package com.personal.To_Do_Application;

import com.personal.To_Do_Application.model.Task;
import com.personal.To_Do_Application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Service and Component are similar to a Bean
@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public List<Task> getAllTask(){
        return taskRepository.findAll();
    }

    public Task findTaskById(Long id){
        return taskRepository.getById(id);
    }

    public List<Task> findAllCompletedTask(){
        return taskRepository.findByCompletedTrue();
    }

    public List<Task> findAllIncompletedTask(){
        return taskRepository.findByCompletedFalse();
    }

    public void deleteTask(Task task){
        taskRepository.delete(task);
    }

    public Task getByTaskDescription(String taskDescription){return taskRepository.getByTaskDescription(taskDescription);}
    public Task updateTask(Task task){
        return taskRepository.save(task);
    }

}
