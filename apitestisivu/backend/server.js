const express = require("express");

const app = express();
const PORT = 3000;

const tuotteet = [
    {
        id: 1,
        nimi: "Kahvi",
        hinta: 3.50
    },
    {
        id: 2,
        nimi: "Tee",
        hinta: 2.50
    },
    {
        id: 3,
        nimi: "Mehu",
        hinta: 2.00
    }
];

app.get("/api/products", (req, res) => {
    res.json(tuotteet);
});

app.listen(PORT, () => {
    console.log(`Palvelin käynnissä: http://localhost:${PORT}`);
});