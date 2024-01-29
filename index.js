const express = require('express');
const cors = require('cors');
const app = express();
const port =  3001;

//middleware
app.use(cors());
app.use(express.json());

const blogs = [
    {
        userId: 1,
        id: 1,
        title: "Example Blog Title",
        body: "This is the body of the blog post. It can contain multiple paragraphs and provide detailed information or thoughts on a particular topic."
    },
    {
        userId: 2,
        id: 2,
        title: "Example Blog Title",
        body: "This is the body of the blog post. It can contain multiple paragraphs and provide detailed information or thoughts on a particular topic."
    },
]

const comments = [
    {
        blogId: 1,
        id: 10,
        name: "Miraz Alvee",
        email: "miraz@example.com",
        body: "This is a comment on the blog post. It can contain additional thoughts…thoughts, feedback,or discussions related to the blog content."
    },
    {
        blogId: 2,
        id: 11,
        name: "Apurbo sami",
        email: "apurbo.sami@example.com",
        body: "This is a comment on the blog post. It can contain additional thoughts, feedback,or discussions related to the blog content."
    }
]

app.get('/blogs', (req, res) => {
    res.send(blogs)
})
app.get('/comments', (req, res) => {
    res.send(comments)
})

app.post('/blogs', (req, res) => {
    //console.log('api hitting')
    const newBlog = req.body;
    newBlog.id = blogs.length + 1;
    blogs.push(newBlog);
    res.send(newBlog);
})
app.post('/comments', (req, res) => {
    console.log('api hitting')
    const newBlog = req.body;
    newBlog.id = blogs.length + 1;
    blogs.push(newBlog);
    res.send(newBlog);
})

app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const index = blogs.findIndex(blog => blog.id === blogId);
    if (index !== -1) {
      const deletedBlog = blogs.splice(index, 1)[0];
      res.send(deletedBlog);
    } 
    else {
      res.status(404).send({ error: 'Blog not found' });
    }
  });

app.get('/', (req, res) => {
    res.send("server is running");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});