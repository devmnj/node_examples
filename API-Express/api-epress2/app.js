const Joi = require("joi");
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();

app.use(express.json());
const users = [];
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.post("/api/users", (req, res) => {
 
  const user=req.body
  users.push({...user,id:uuidv4()});
  
  res.send(`User with the name ${user.uname} added`)
});

app.put("/api/users/:id", (req, res) => {
  
});

app.delete("/api/users/:id", (req, res) => {
   
  });

function validateCourse(course) {
  
  
 
}
app.get("/api/courses/:id", (req, res) => {
   
});
 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on the port ${port}`);
});
