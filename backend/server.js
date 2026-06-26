const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Root page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Admission API
app.post("/admission", (req, res) => {

    const { name, email, course } = req.body;

    const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";

    db.query(sql, [name, email, course], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).send("Database Error");
        }

        res.send("Admission Submitted Successfully");

    });

});

// Get all students
app.get("/students", (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).send("Database Error");
        }

        res.json(result);

    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
