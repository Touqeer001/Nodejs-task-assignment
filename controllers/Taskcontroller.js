import tasks from "../tasks.js"



//get all task
export const getTaskController = async (req, res) => {
    try {
    
      res.status(200).send({
        success: true,
        message: "ALLTask ",
        tasks,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting Task",
        error: error.message,
      });
    }
  };


  export const addTaskController = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        const newTask = { id: tasks.length + 1, title, description, status: 'pending' };
        tasks.push(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating Task",
        });


       
        
    }
};


//for deleting the task
export const deleteTaskController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(task => task.id === id);
        const deletedTask = tasks.splice(taskIndex, 1)[0];
       res.status(200).send({
        success: true,
        message: "Task Deleted Successfully",
        task: deletedTask
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting Task",
        error,
      });
    }
  };
  