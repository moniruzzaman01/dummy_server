const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5001;
app = express();

app.use(cors());

app.get("/", async (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log("server is running from: ", port);
});
