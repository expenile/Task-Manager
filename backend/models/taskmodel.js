const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName:{
        type: String,
        required: true
    },
    isDone:{    
        type: Boolean,
        default: true
    }
});
const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;