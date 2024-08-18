package com.personal.To_Do_Application.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("tasks")
public class Task {
    @Id
    private String id;
    private String description;
    private String status;
    private Long taskNumber;
    private String listName;

    public Task(String description, String status, String listName, Long taskNumber){
        super();
        this.description = description;
        this.status = status;
        this.taskNumber = taskNumber;
        this.listName = listName;
    }

    // Getters
    public String getId(){
        return id;
    }

    public String getDescription(){
        return description;
    }

    public String getStatus(){
        return status;
    }
    public Long getTaskNumber(){
        return taskNumber;
    }
    public String getListName(){return listName;}

    // Setters
    public void setId(String id){
        this.id = id;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setStatus(String status){
        this.status = status;
    }
    
    public void setTaskNumber(Long taskNumber){
        this.taskNumber = taskNumber;
    }
    public void setListName(String listName) {this.listName = listName;}
    public String toString(){
        return String.format(
                "Tasks{id: %s, description: %s, status: %s, taskNumber: %s, listName: %s",
                getId(), getDescription(), getStatus(), getTaskNumber(), getListName());
    }
}

