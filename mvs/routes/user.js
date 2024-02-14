const express = require('express');

const router = express.Router();

const { getAllUsers, getUserById, updateUserById, deleteUserById, createNewUser } = require("../controllers/user")

router.route("/")
    .get(getAllUsers)   
    .post(createNewUser)

router.route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)


module.exports = router;