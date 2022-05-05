const express = require('express');
const friendsRouter = require('./routes/friends.router');

const app = express();
const port = 3000;

// built in middelware 

app.use(express.json());// return data as the content type
// mounting
app.use('/friends',friendsRouter);   // router is like self contained app, min app has middleware 


app.listen(port, ()=>{
    console.log(`Listening  to port ${port}`);
}
)