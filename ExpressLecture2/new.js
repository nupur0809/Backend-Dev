const express = require('express');
const user = require('./data');
const app = express();

app.get('/', (req, res) => {
  res.send("home");
});
app.get("/user/page",(req,res)=>{
  res.send("user page");
});
app.get('/user/profile', (req, res) => {
   
   let name=req.query.name;
   let size=req.query.size;
       console.log(req.query);
       res.json({name,size}) 
});

// 🔍 Get user by ID
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundUser = user.find((ele) => ele.id === id);

  if (!foundUser) {
    return res.status(404).send("user not found");
  }

  res.json(foundUser);
});

// 📄 Get all users
app.get('/user', (req, res) => {
  res.json({
    data: user
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
