const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./config/dbConnect');
const userRouter = require('./routers/userRouter');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

db.sequelize.sync();

app.use('/api/user', userRouter);


app.listen(3000, (req, res) =>{
    console.log('RUNNING...')
})