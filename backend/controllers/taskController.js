const TaskModel = require('../models/taskmodel');
const createTask = async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data);
        const doc = await model.save();
        res.status(201).json({message: 'Task created successfully',success: true});
        
    } catch (error) {
        res.status(500).json({message: 'Failed to create task',success: false});
        
    }
}


const fetchAllTask = async (req, res) => {
    const data = req.body;
    try {
        const data = await TaskModel.find({});
        res.status(200).json({message: 'All the task',success: true,data:data});
        
    } catch (error) {
        res.status(500).json({message: 'Failed to get all task',success: false});
        
    }
}

const updateTaskById = async (req, res) => {
    
    try {
        const id = req.params.id;
    const body = req.body;
    const obj = { $set : { ...body }}
        const data = await TaskModel.findByIdAndUpdate(id, obj);
        res.status(200).json({message: 'Task Updated',success: true});
        
    } catch (error) {
        res.status(500).json({message: 'Failed to get all task',success: false});
        
    }
}

const deleteTaskById = async (req, res) => {
    const id = req.params.id;
    try {
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({message: 'Task is deleted',success: true});
        
    } catch (error) {
        res.status(500).json({message: 'Failed to delete task',success: false});
        
    }
}




module.exports = {
    createTask,
    fetchAllTask,
    updateTaskById,
    deleteTaskById
}