const express = require("express");
const router = express.Router();

const todoController = require("../controller/todoController");

router.get("/test", todoController.test);
router.post("/create", todoController.create);

module.exports = router;