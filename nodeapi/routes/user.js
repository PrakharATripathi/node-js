const express = require('express');
const {  findUser,  registerUser, loginUser, logoutUser } = require('../controllers/user');
const isAuthenticated = require('../middleware/auth');
const router = express.Router();

// router.get("/all", getAllUser);

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)

router.get("/me",isAuthenticated,findUser);
// router.route("/:id").get(findUser).put(updateUser).delete(deleteUser);
// router.get("/:id", findUser)
// router.put("/:id", updateUser)
// router.delete("/:id",deleteUser )

module.exports = router