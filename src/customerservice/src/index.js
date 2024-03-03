const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./customerRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(customerRoutes);

app.listen(port, () => {
    console.log(`Customerservice is running on port ${port}`);
});
