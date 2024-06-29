const express = require('express');
const router = express.Router();

const { createTask ,fetchAllTask,updateTaskById,deleteTaskById} = require('../controllers/taskController');


//to get all the task
router.get('/', fetchAllTask);

//to create a task
router.post('/', createTask);

//to update a task
router.put('/:id',updateTaskById);

//to delete a task
router.delete('/:id',deleteTaskById);


module.exports = router;