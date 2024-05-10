const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
// const upload = require("./routes/upload");
// const kids = require("./routes/kids");
// const alphabets = require("./routes/alphabets");
// const Birthday = require("./routes/Birthday");
// const breakingnews = require("./routes/breakingnews");
// const Devotional = require("./routes/Devotional");
// const Frames = require("./routes/Frames");
// const Wedding = require("./routes/Wedding");
// const Trending = require("./routes/Trending");
// const New = require("./routes/New");
// const family = require("./routes/family");
const cors = require("cors");
const InitiateMongoServer = require("./config/db");


InitiateMongoServer();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.json({ message: "API Working" });
});
app.use("/user", user);
// app.use("/user", user);
// app.use("/file", kids);
// app.use("/file", alphabets);
// app.use("/file", Birthday);
// app.use("/file", breakingnews);
// app.use("/file", Devotional);
// app.use("/file", family);
// app.use("/file", Frames);
// app.use("/file", Trending);
// app.use("/file", Wedding);
// app.use("/file", New);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
