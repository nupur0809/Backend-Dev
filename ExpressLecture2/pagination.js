const express = require('express');
const users = require('./data2');

const app = express();

app.get('/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;   // default page 1
  const limit = parseInt(req.query.limit) || 2; // default limit 2

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = users.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    totalUsers: users.length,
    totalPages: Math.ceil(users.length / limit),
    data: result
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
