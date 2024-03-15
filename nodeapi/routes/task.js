const express = require('express');
const { newTask, getAllTask, updateTask, deleteTask } = require('../controllers/task');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

router.post("/new",isAuthenticated,newTask)
router.get("/alltask",isAuthenticated,getAllTask)
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)


module.exports = router