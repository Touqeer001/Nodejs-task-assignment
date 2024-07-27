import express from "express";

import { addTaskController, deleteTaskController, getTaskController } from "../controllers/Taskcontroller.js";

const router = express.Router();

//get task
router.get("/get-task", getTaskController);


router.post("/add-task", addTaskController);

//delete task
router.delete('/delete/:id', deleteTaskController);



export default router;
