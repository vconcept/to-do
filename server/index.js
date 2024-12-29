require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./database");

const app= express();

const router = require("./routes");
// app.get("/hello", (req, res) => {
//     res.status(200).json({msg: "hello people"});
// });
app.use("/api", router);

const port = process.env.PORT || 5000;

const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};
startServer();