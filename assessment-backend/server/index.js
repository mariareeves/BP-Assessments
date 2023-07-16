// bring in the packages
const express = require("express");
const cors = require("cors");

// creates an instance of the Express Application
// app object is used to define routes, middleware, and handle HTTP requests
const app = express();

app.use(cors());


//middleware:
//It allows the server to process JSON-encoded data in the HTTP request payload and make it available in the 'req.body'
app.use(express.static("public"));
app.use(express.json());


//import the function 'getCompliment, getRandomFortune' from the controller file
const { getCompliment, getRandomFortune, getQuotes, addGoals, getGoals, deleteGoal, updateGoal } = require('./controller')



// get a random compliment. Setting up a route to handle the get request. When the request is made to this endpoint, the cb 'getCompliment' will run.
app.get("/api/quotes", getQuotes)
app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getRandomFortune)
app.get("/api/goals", getGoals)
app.post("/api/goals", addGoals)
app.delete("/api/goals/:id", deleteGoal)
app.put("/api/goals/:id", updateGoal)


//the server is running on port 4000
app.listen(4000, () => console.log("Server running on 4000"));
