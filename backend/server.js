const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

app.post("/admission", (req, res) => {

    const student = {
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    };

    students.push(student);

    res.send("Admission Submitted Successfully");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
