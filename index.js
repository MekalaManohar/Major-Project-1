const express = require("express");
const path = require("path");
const port = 5000;
const routes = require("./routers/index");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log("Error while connecting to server = ", err);
    return;
  }
  console.log("Express server running on port: ", port);
});
