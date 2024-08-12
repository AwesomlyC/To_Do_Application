package com.personal.To_Do_Application.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("tasks")
public class Task {
    @Id
    private String id;
    private String taskDescription;
    private String status;
    private Long taskNumber;

    public Task(String taskDescription, String status, Long taskNumber){
        super();
        this.taskDescription = taskDescription;
        this.status = status;
        this.taskNumber = taskNumber;
    }

    // Getters
    public String getId(){
        return id;
    }

    public String getTask(){
        return taskDescription;
    }

    public String getStatus(){
        return status;
    }
    public Long getTaskNumber(){
        return taskNumber;
    }

    // Setters
    public void setId(String id){
        this.id = id;
    }

    public void setTask(String task){
        this.taskDescription = task;
    }

    public void setStatus(String status){
        this.status = status;
    }
    
    public void setTaskNumber(Long taskNumber){
        this.taskNumber = taskNumber;
    }
    public String toString(){
        return String.format(
                "Tasks{id: %s, taskDescription: %s, status: %s, taskNumber: %s",
                getId(), getTask(), getStatus(), getTaskNumber());
    }
}

