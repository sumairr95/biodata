const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express(),
    port = 3080;
const { addUser } = require("./controllers/users/userController");
// place holder for the data
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/out')));
app.use(cors());
process.setMaxListeners(0);

app.post("/api/user", addUser);
// router.post("/api/users", getAllUsers)

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});