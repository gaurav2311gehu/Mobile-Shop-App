const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mobiles = [
  { id: 1, brand: "Apple", model: "iPhone 15", price: 120000 },
  { id: 2, brand: "Samsung", model: "Galaxy S23", price: 80000 },
  { id: 3, brand: "OnePlus", model: "11 Pro", price: 65000 }
];

app.get('/', (req, res) => {
  res.send('Welcome to Mobile Shop API 🚀');
});

app.get('/mobiles', (req, res) => {
  res.json(mobiles);
});

app.listen(port, () => {
  console.log(`Mobile Shop API running on port ${port}`);
});
