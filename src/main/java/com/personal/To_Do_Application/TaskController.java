package com.personal.To_Do_Application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private static final Logger log = LoggerFactory.getLogger(TaskController.class);
    @Autowired
    private TaskService taskService;

    @GetMapping("/")
    public ResponseEntity<List<Task>> getAllTask(){
        log.info(String.format("%s",taskService.getAllTask()));
        System.out.println("called regular");
        return ResponseEntity.ok(taskService.getAllTask());
    }

    @GetMapping("/completed")
    public  ResponseEntity<List<Task>> getAllCompletedTask(){
        return ResponseEntity.ok(taskService.findAllCompletedTask());
    }

    @GetMapping("/incompleted")
    public ResponseEntity<List<Task>> getAllIncompletedTask(){
        log.info(String.format("%s",taskService.findAllIncompletedTask()));
        log.info("WORKS");
        System.out.println("IDK");
        return ResponseEntity.ok(taskService.findAllIncompletedTask());
    }
    @PostMapping("/")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        return ResponseEntity.ok(taskService.createNewTask(task));
    }

    @PostMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String id, @RequestBody Task task){
        task.setId(id);
        return ResponseEntity.ok(taskService.updateTask(task));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteTask(@RequestBody Task task) {
        taskService.deleteTask(task);
        return ResponseEntity.ok(true);
    }
}
