# Task Management API

This is a simple Task Management API built with Node.js, Express, and an in-memory array for data storage.

## Features
- Get all tasks
- add a new task
- Delete an existing task

## Requirements

- Node.js
- npm 

## Installation

1. Clone the repository:
   
    git clone https://github.com/Touqeer001/Nodejs-task-assignment.git
   

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Server

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on `http://localhost:8080`.

## API Endpoints

### Get All Tasks

- **URL:** `/api/v1/task/get-task`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "success": true,
        "tasks": [
            {
                "id": 1,
                "title": "Task Title",
                "description": "This is a description for task 1",
                "status": "pending"
            }
        ]
    }
    ```

### add a Task

- **URL:** `/api/v1/task/add-task`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "title": "Task Title",
        "description": "Task Description"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "task": {
            "id": 1,
            "title": "Task Title",
            "description": "Task Description",
            "status": "pending"
        }
    }
    ```

### Delete a Task

- **URL:** `/api/v1/task/delete/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "success": true,
        "message": "Task deleted successfully",
        "task": {
            "id": 1,
            "title": "Task Title",
            "description": "Task Description",
            "status": "pending"
        }
    }
    ```

### `controllers/taskController.js`
Contains the logic for handling task adding , and deletion.

### `data/tasks.js`
Provides an in-memory array to store tasks.

### `routes/taskRoutes.js`
Defines the API routes for task-related operations.

