const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/candidates', require('./routes/candidates'));
app.use('/clients', require('./routes/clients'));
app.use('/activities', require('./routes/activities'));
app.use('/access', require('./routes/access'));
app.use('/users', require('./routes/users'));

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});