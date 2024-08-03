package com.personal.To_Do_Application;

import com.personal.To_Do_Application.model.Task;
import com.personal.To_Do_Application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class ToDoApplication implements CommandLineRunner{
	@Autowired
    TaskRepository taskRepository;
	public static void main(String[] args) {
		SpringApplication.run(ToDoApplication.class, args);
	}

	public void run(String... args){
		System.out.println("---Creating Tasks---");
//		createTasks();
		getAllTasks();
		System.out.println("---Exiting...---");
	}

	public void createTasks(){
		System.out.println("Data Creation Started...");
		taskRepository.save(new Task("task1", false));
		taskRepository.save(new Task("task2", false));
		taskRepository.save(new Task("task3", true));
		taskRepository.save(new Task("task4", true));

	}

	public void getTask(){

	}


	public void getAllTasks(){
		taskRepository.findAll().forEach(task -> System.out.println(task));
	}

	public void deleteAllTasks(){
		taskRepository.findAll().forEach(task -> taskRepository.delete(task));
		System.out.println("Deleted all tasks...");
	}

}
