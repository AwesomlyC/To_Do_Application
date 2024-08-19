# Personal Project: WhatsOnTheList (To-Do List Application)

## Purpose of Project
This project is a mini full-stack as it includes the development of both the backend and frontend from end-to-end. 
As the name suggest, it is a to-do-list project so individuals can organize their day without the requirement of signing in.
I used React and Bootstrap for the frontend as a way to have a functional webpage as quickly as possible to some styling.
For the backend, I used Spring Boot to create RESTFUL APIs and MongoDB to store tasks as JSON documents. MongoDB was chosen to store
tasks as I plan to add more fields in the future as well as an interest in this particular DB. 
MongoDB is a NoSQL DB that is both easy to understand and use. All technologies I've used are those I want to practice and learn new skills.

## Technology used

### FrontEnd

- React
- Bootstrap
- Javascript

### BackEnd

- Spring Boot
- MongoDB
- Java


## Tutorial Followed

[React JS and Spring Boot Tutorial] (https://www.youtube.com/watch?v=IxYa6cKimZc)

## Version History

- Version 1
    - Basic Layout with basic features: display all tasks, add button feature, and delete task
- Version 2
    - Modify the "id" of the document to be the total count of documents instead. Added feature of updating the status of an existing task
- Version 3 (Finalize - 8/17/2024)
    - Add a new home page in which users can create or load lists to display their tasks. Additionally, changed the 'id' to be the maximum number when created instead of the total count. Changed the delete feature to find the specific document (fixed the issue when it delete two documents due to the same 'id'). Added the feature to update the description on the same page.
- Version 4
    - Modified the delete feature again to fix the issue when trying to delete a document that has the same description as another document.
    - Update UI phase
        - Color changed for tasks marked completed
        - Changed navbar to be "Home Page | Title | About"
    - Added About Page
    - Error Handling when a field is empty/null. Displays an error message when triggered.
