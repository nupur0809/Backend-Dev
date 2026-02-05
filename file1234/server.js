import express from "express";

const app = express();
const PORT = 3000;

// ---------- Middleware ----------
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Custom middleware → response time logger
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });

  next();
});

// Set EJS
app.set("view engine", "ejs");

// ---------- Dummy Data ----------
const users = ["amit", "nupur", "yashi", "rohit"];

const blogPosts = [
  { id: 1, title: "First Post", content: "Welcome to my blog!" },
  { id: 2, title: "Learning Express", content: "Express is awesome!" }
];

// ---------- ROUTES ----------

// Home
app.get("/", (req, res) => {
  res.render("index");
});

// ✅ 1. Filter Users by Query
app.get("/users", (req, res) => {
  const name = req.query.name;
  let filtered = users;

  if (name) {
    filtered = users.filter(u => u.includes(name));
  }

  res.render("users", { users: filtered });
});

// ✅ 3. Contact Form
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});

// ✅ 5. Gallery
app.get("/gallery", (req, res) => {
  const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
  res.render("gallery", { images });
});

// ✅ 6. Blog
app.get("/blog", (req, res) => {
  res.render("blog", { posts: blogPosts });
});

app.get("/blog/:id", (req, res) => {
  const post = blogPosts.find(p => p.id == req.params.id);
  res.render("post", { post });
});

app.post("/blog", (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  blogPosts.push(newPost);
  res.redirect("/blog");
});

// ✅ 4. Custom 404 Page
app.use((req, res) => {
  res.status(404).render("404");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
