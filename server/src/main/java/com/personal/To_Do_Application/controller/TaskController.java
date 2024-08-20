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
import java.util.Optional;

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
        Task test = taskService.updateStatus(task, "Complete");
        return ResponseEntity.ok(taskService.updateStatus(task, "Complete"));
    }

    @PostMapping("/Incomplete")
    public ResponseEntity<Task> updateStatusIncomplete(@RequestBody Task task){
        Task test = taskService.updateStatus(task, "Incomplete");
        return ResponseEntity.ok(taskService.updateStatus(task, "Incomplete"));
    }
    @PostMapping("/")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        return ResponseEntity.ok(taskService.createTask(task));
    }


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
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteTask(@PathVariable String id) {
//        Task task = taskService.findDocument(id, listName, taskDescription, status);
        Optional<Task> document = taskService.findDocumentById(id);
        if (document.isPresent()){
            taskService.deleteTask(document.get());
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);

    }

    @GetMapping("/{listName}")
    public ResponseEntity<List<Task>> getListNameTask(@PathVariable String listName){
        return ResponseEntity.ok(taskService.getListNameTask(listName));
    }

    @PutMapping("/modifyDescription")
    public ResponseEntity<Task> updateTaskDescription(@RequestBody Task task, @RequestHeader("updateDescription") String newDescription){
        task.setDescription(newDescription);
        Task test = taskService.saveDocument(task);
        return ResponseEntity.ok(taskService.saveDocument(task));
    }
    @PostMapping("/{listName}/Incomplete")
    public ResponseEntity<Boolean> setAllTasksIncomplete(@PathVariable String listName){
        List<Task> allTasks = taskService.findAllByListName(listName);
        for (Task task: allTasks){
            taskService.updateStatus(task, "Incomplete");
        }
        return ResponseEntity.ok(true);
    }
}
