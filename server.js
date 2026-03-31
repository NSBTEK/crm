const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});