// gyümölcsök nyilvantartasa
const port = 3000;
const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());
let fruits = [
    {
        "id": 1,
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
    }
];

//Összes gyümölcs lekérdezése
app.get('/fruit', (re, res) => {
    res.header('Content-Type',);
    res.json(fruits);
    res.status(200);
})

//Egy gyümölcs lekérdezése
app.get('/fruit/:id', (req, res) => {
    let id = req.params.id;
    res.header('Content-Type',);
    res.json(fruits[id - 1]);
    res.status(200);
});

//Új gyümölcs létrehozása
app.post('/fruit', (req, res) => {
    let newFruit = req.body;
    fruits.push(newFruit);
    res.status(200);
    res.send(JSON.stringify(newFruit));
});

//Egy gyümölcs módosítása
app.put('/fruit/:id', (req, res) => {
    let id = req.params.id;
    let updatedFruit = req.body;
    fruits[0] = updatedFruit;
    res.send(JSON.stringify(updatedFruit));
});

//Egy gyümölcs törlése
app.delete('/fruit/:id', (req, res) => {
    let id = req.params.id;
    fruits.splice(id - 1, 1);
res.send(fruits[id -1]);
})

app.listen(port, () => {
    console.log(`Elérési port: ${port}`);
});