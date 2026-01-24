const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello");
});

app.get('/users/:id/profile', (req, res) => {
  const id = parseInt(req.params.id);
  const tab = req.query.tab;
  const lang = req.query.lang;

  res.json({
    userId: id,
    selectedTab: tab,
    language: lang
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
