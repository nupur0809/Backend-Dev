import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
    const count = parseInt(req.query.count) || 0;

    const images = [];
    for (let i = 1; i <= count; i++) {
        images.push(`https://picsum.photos/200?random=${i}`);
    }

    res.render("index", { images, count });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
