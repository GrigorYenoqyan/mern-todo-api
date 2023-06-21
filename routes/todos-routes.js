const express = require('express');
const todoControllers = require("../controllers/todos");

const router = express.Router();

router.post("/", todoControllers.createTodo);

router.get("/", todoControllers.getTodos);

router.patch("/:id", todoControllers.updateTodo);

router.delete("/:id", todoControllers.deleteTodo);

module.exports = router;
