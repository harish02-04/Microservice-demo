const express = require('express');
const app = express();
app.get('/user', (req, res) => res.send('User service'));
app.listen(3001, () => console.log('User service on port 3001'));
