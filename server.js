const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const ejs = require('ejs');
require('dotenv').config();



const app = express();
app.use(express.json());

app.set('view engine', 'ejs');


const PORT = process.env.PORT;

app.use('/', userRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});