let blogs = [
  { id: 1, title: "blog1", content: "content1", author: "author1" },
  { id: 2, title: "blog2", content: "content2", author: "author2" },
];

const blogController = {
  //Get all blogs
  getAllBlogs: (req, res) => {
    res.send(blogs);
  },

  //Creat New Blog
  createBlog: (req, res) => {
    const blog = {
      id: blogs.length + 1,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    if (!blog.title || !blog.content || !blog.author) {
      return res.status(400).json({ error: "All fields are mandatory !" });
    }
    blogs.push(blog);
    res.status(201).json(blog);
  },

  //Get Blog By ID
  getBlogById: (req, res) => {
    const blog = blogs.find((i) => i.id === parseInt(req.params.id));
    if (!blog) {
      res.status(404);
      //   res.status(404).send("blog not found");
    } else {
      res.json(blog);
    }
  },
  //Update Blog
  updateBlog: (req, res) => {
    const blog = blogs.find((i) => i.id === parseInt(req.params.id));
    if (!blog) return res.status(404).send("blog dosnt found");
    if (req.body.title !== undefined) {
      blog.title = req.body.title;
    }

    if (req.body.content !== undefined) {
      blog.content = req.body.content;
    }

    if (req.body.author !== undefined) {
      blog.author = req.body.author;
    }
    res.send(blog);
  },
  //Delete Blog
  deleteBlog: (req, res) => {
    const findblogIndex = blogs.findIndex(
      (element) => element.id === parseInt(req.params.id)
    );
    if (findblogIndex === -1) {
      res.status(400).send("element not found");
      return;
    }
    blogs.splice(findblogIndex, 1);
    res.send();
  },
};
module.exports = blogController;
