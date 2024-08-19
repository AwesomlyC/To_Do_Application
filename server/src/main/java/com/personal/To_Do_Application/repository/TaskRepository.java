package com.personal.To_Do_Application.repository;

import com.personal.To_Do_Application.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {

    public List<Task> findAll();
    public Task getById(Long id);
    public long count();
    public Task findByIdAndListNameAndDescriptionAndStatus(String id, String listName, String taskDescription, String status);
}
