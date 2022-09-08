require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../s2')))



app.get("/jwt",(req,res) => {
    res.send(process.env.JWTPRIVATEKEY);
})

//----------------database connection
// connection();
// console.log(process.env.JWTPRIVATEKEY);
// middlewares
app.use(express.json());
app.use(cors());

//------------------------routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on http://localhost:${port}`));