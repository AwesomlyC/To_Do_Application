package com.personal.To_Do_Application;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("tasks")
public class Task {
    @Id
    private String id;
    private String taskDescription;
    private boolean completed;

    public Task(String taskDescription, boolean completed){
        super();
        this.taskDescription = taskDescription;
        this.completed = completed;
    }

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

    public String toString(){
        return String.format(
                "Tasks{id: %s, taskDescription: %s, completed: %s",
                getId(), getTask(), getCompleted());
    }
}

