const express = require("express");
const router = express.Router();
const { getCollection } = require("./models/index");

// const { getConnected}

// GET /todos
router.get("/todos", async (req, res) => {
    const collection = getCollection;
    const todos = await collection.find({}).toArray();

    res.status(200).json(todos);
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