const express = require("express");
const router = express.Router();

const { getConnected}

// GET /todos
router.get("/todos", (req, res) => {
    res.status(200).json({ msg: "GET REQUEST TO /api/todos "});
});


// POST /todos
router.post("todos", (req, res) => {
    res.status(201).json({ msg: "POST REQUEST TO /api/todos "});
})

// DELETE /todos
router.delete("/todos", (req, res) => {
    res.status(200).json({ msg: "DELETE REQUEST TO /api/todos"});
});

// PUT /todos
router.put("/todos", (req, res) => {
    res.status(200).json({ msg: "UPDATE REQUEST TO /api/todos"});
});

module.exports = router;