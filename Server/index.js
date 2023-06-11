const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const UserRoute = require('./routes/UserRoutes');
app.use("/Users", UserRoute);

// Default Unhandled Request
app.use("/*", (req, res) => {
    res.send("Invalid Route!!!");
});

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port ' + process.env.PORT);
});