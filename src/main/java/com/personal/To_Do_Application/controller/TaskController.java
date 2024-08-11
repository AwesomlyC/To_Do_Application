package com.personal.To_Do_Application.controller;

import com.personal.To_Do_Application.model.Task;
import com.personal.To_Do_Application.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Controller
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private static final Logger log = LoggerFactory.getLogger(TaskController.class);
    @Autowired
    private TaskService taskService;

    @GetMapping("/")
    public ResponseEntity<List<Task>> getAllTask(){
        return ResponseEntity.ok(taskService.getAllTask());
    }

    @PostMapping("/Complete")
    public ResponseEntity<Task> updateStatusComplete(@RequestBody Task task){
        return ResponseEntity.ok(taskService.updateStatus(task, "Complete"));
    }

    @PostMapping("/Incomplete")
    public ResponseEntity<Task> updateStatusIncomplete(@RequestBody Task task){
        return ResponseEntity.ok(taskService.updateStatus(task, "Incomplete"));
    }
    @PostMapping("/")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        return ResponseEntity.ok(taskService.createTask(task));
    }

//    @PostMapping("/{id}")
//    public ResponseEntity<Task> updateTask(@PathVariable String id, @RequestBody Task task){
//        task.setId(id);
//        return ResponseEntity.ok(taskService.updateTask(task));
//    }
    @GetMapping("/count")
    public ResponseEntity<Long> getCount(){
        return ResponseEntity.ok((Long)taskService.getCount());
    }
    // Retrieves the max number found under taskNumber id
    // Returns the max + 1
    @GetMapping("/getNewNumber")
    public ResponseEntity<Long> getNextTaskNumber(){
        return ResponseEntity.ok((Long)taskService.getMaxTaskNumber() + 1);
    }
    @DeleteMapping("/{taskDescription}")
    public ResponseEntity<Boolean> deleteTask(@PathVariable String taskDescription) {
        Task task = taskService.getByTaskDescription(taskDescription);
        taskService.deleteTask(task);
        return ResponseEntity.ok(true);
    }
}
