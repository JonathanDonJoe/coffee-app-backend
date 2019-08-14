// const http = require('http');
const express = require('express');
const Coffee = require('../models/coffee');

const app = express();
const port = 3000;

app.get('/:coffeeId',(req, res) => {
    console.log('hihi');
    console.log(req.params.coffeeId)
    const oneCoffee = Coffee.getById(parseInt(req.params.coffeeId));
    oneCoffee
        .then((data) => {
            console.log('new data');
            console.log(data);
            res.json(data);
        
        })
});
app.get('/',(req, res) =>{
    console.log('bubu');
    console.log(req.params)
    const allCoffee = Coffee.getAll(req.params);
    allCoffee
        .then((data)=>{
            console.log('alldata');
            console.log(data);
            res.send(data);
        })
})

app.listen(port);
// server.listen(port, hostname, () => {
//     console.log(`Server is running on ${port}${hostname}`);
// });