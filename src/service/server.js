const express = require('express');
const app = express();
const port = 3001;
const userRoute = require('./user.js')

app.use('/user', userRoute);


app.listen(port, () => {console.log("App is running on port " + port)})
