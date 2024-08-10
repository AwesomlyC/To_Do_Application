package com.personal.To_Do_Application.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("tasks")
public class Task {
    @Id
    private String id;
    private String taskDescription;
    private boolean completed;
    private Long taskNumber;

    public Task(String taskDescription, boolean completed, Long taskNumber){
        super();
        this.taskDescription = taskDescription;
        this.completed = completed;
        this.taskNumber = taskNumber;
    }
//    public Task(String taskDescription, Long taskNumber){
//        super();
//        this.taskDescription = taskDescription;
//        this.taskNumber = taskNumber;
//    }

    // Getters
    public String getId(){
        return id;
    }

    public String getTask(){
        return taskDescription;
    }

    public boolean getCompleted(){
        return completed;
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

    public void setCompleted(boolean completed){
        this.completed = completed;
    }
    
    public void setTaskNumber(Long taskNumber){
        this.taskNumber = taskNumber;
    }
    public String toString(){
        return String.format(
                "Tasks{id: %s, taskDescription: %s, completed: %s",
                getId(), getTask(), getCompleted());
    }
}

