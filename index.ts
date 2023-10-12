import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.status(200).json("This is a web server that runs with Bun :)");
});

app.listen(3000,() =>{
    return console.log('Express listening port 3000');
})