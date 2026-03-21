const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "yuktiarya",
        content: "Work hard for giving comfortable life for parents",
    },
    {
        id:uuidv4(),
        username: "divyaarya",
        content: "Work hard to feel proud",
    },
    {
        id:uuidv4(),
        username: "trapiarya",
        content: "Work hard for growing",
    },
];

// show posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// new page 
app.get("/posts/news", (req, res) => {
    res.render("news");
});

// create post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id,username, content });

    res.redirect("/posts"); // better than send
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    if (!post) {
        return res.send("Post not found ❌ (ID mismatch)");
    }
    res.render("show",{post});

});

//Update post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log("BODY:", req.body);
    let { content } = req.body;
    let post = posts.find((p) => p.id === id);
    if (!post) {
        return res.send("Post not found ❌");
    }
    if (content === undefined) {
        return res.send("Content missing ❌");
    }
    post.content = content;
    console.log("UPDATED:", post);
    // res.send("Updated successfully ✅");
    res.redirect("/posts");
});

//edit
app.get("/posts/:id/edit", (req,res)=> {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit",{post});
});
//Delete
app.delete("/posts/:id",(req,res)=> {
    let {id} = req.params;
    posts = posts.filter((p)=>id !==p.id);
    res.send("delete success");
});
app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});