# Task Management API

This is a simple Task Management API built with Node.js, Express, and an in-memory array for data storage. It allows you to create and delete tasks.

## Features

- Create a new task
- Delete an existing task

## Requirements

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:
   
    git clone https://github.com/yourusername/task-management-api.git
   

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Server

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

### Create a Task

- **URL:** `/api/v1/task/create`
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

## Project Structure

