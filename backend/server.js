const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

let students = [];

// root page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// admission API
app.post("/admission", (req, res) => {
    const student = {
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    };

    students.push(student);

    res.send("Admission Submitted Successfully");
});

// students list API
app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
