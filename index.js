const express = require("express");
const app = express();

app.use(express.json());

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 120}
];

app.listen(3000);
