const { ErrorHandlerClass } = require("../middleware/error");
const Task = require("../models/task");

const newTask = async (req, res, next) => {
    const { tittle, description } = req.body;

    await Task.create({
        tittle,
        description,
        user: req.user,
    })
    res.status(201).json({
        success: true,
        message: "task added succesfully"
    })
}

const getAllTask = async(req, res) => {
    const userid = req.user._id
    const tasks = await Task.find({user:userid})

    return res.status(200).json({
        success:true,
        tasks
    })
}
const updateTask = async(req, res) => {
    const id = req.params.id
    const tasks = await Task.findById(id)
    if(!tasks) return next(new ErrorHandlerClass('Task not found XYZ',404));  
    tasks.isCompleted = !tasks.isCompleted;
    await tasks.save();
    return res.status(200).json({
        success:true,
        message:"task updated"
    })
}
const deleteTask = async(req, res,next) => {
    const id = req.params.id
    const tasks = await Task.findById(id)

    if(!tasks) return next(new ErrorHandlerClass('Task not found XYZ',404));  
    await tasks.deleteOne();

    return res.status(200).json({
        success:true,
        message:"task deleted"
    })
}


module.exports = { newTask,getAllTask ,updateTask,deleteTask}