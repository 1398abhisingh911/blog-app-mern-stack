const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("Connected To MONGO DB"))
  .catch(err => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File Uploaded");
});

app.use("/users", userRoute);

app.use("/auth", authRoute);
app.use("/posts", postRoute);
app.use("/categories", categoriesRoute);
app.use("/", (req, res) => {
  console.log("Hey this is main URL");
});

app.listen("5000", () => {
  console.log("Backend Is Running");
});
