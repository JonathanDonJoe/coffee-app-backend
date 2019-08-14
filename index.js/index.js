// const http = require('http');
const express = require('express');
const Coffee = require('../models/coffee');

// const hostname = 'localhost';
const app = express();
const port = 3000;

// const server = http.createServer(async (req, res) => {
app.get('/:coffeeId', (req,res) => {
    console.log('hi');
    const oneCoffee = Coffee.getById(parseInt(req.params.coffeeId));
    oneCoffee
        .then( data => {
        console.log(data);
        res.json(data);
        })
    // console.log(req.url);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    // if (req.url === '/oneCoffee') {
    //     const oneCoffee  = await Coffee.getById(3);
    //     const oneCoffeeJson = JSON.stringify(oneCoffee);
    //     res.end(oneCoffeeJson);
    // } else {
    //     res.end(`{message: "Thanks"}`);
    // };
})

app.get('/', (req,res) => {
    console.log('hi');
    const allCoffee = Coffee.getAll();
    allCoffee
        .then( data => {
        console.log(data);
        res.json(data);
        })
})




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
// server.listen(port, hostname, () => {
//     console.log(`Server is running on ${port}${hostname}`);
// });