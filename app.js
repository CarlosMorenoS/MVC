const express = require("express");
const app = express();
const router = express.Router();
app.use(express.static("public"));

// SERVER ON

app.listen(3000, () =>{
    console.log("server on port 3000");
});

// ROUTERS

const mainRouter = require("./routers/main")
//  ROUTES
// ACA SE USA APP.USE !!!!!!

app.use("/", mainRouter);
app.use("/about", mainRouter);
