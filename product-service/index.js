const express = require('express');
const app = express();
app.get('/product', (req, res) => res.send('Product service'));
app.listen(3002, () => console.log('Product service on port 3002'));