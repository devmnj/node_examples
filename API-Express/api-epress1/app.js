const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course not found");

//   const result= validateCourse(req.body)
const {error}= validateCourse(req.body) //object distraction
  if (error) {
    res.status(404).send(error.details[0].message);
    return;
  }
  course.name=req.body.name
  res.send(course)
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) 
        return res.status(404).send("The course not found");
         
  
    const index= courses.indexOf(course)
    courses.splice(index,1)     
    res.send(course)
  });

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course not found");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  // res.send(req.params)
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on the port ${port}`);
});
