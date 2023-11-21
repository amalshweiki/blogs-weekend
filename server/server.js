const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const blogRouter = require("./routes/blogRouter");
const errorHandler = require("./middleware/errorHandller");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/blogs", blogRouter);
app.use(errorHandler);

app.listen(PORT, console.log(`server running at port : ${PORT}`));
