const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./orderRoutes');
const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(orderRoutes);

app.listen(port, () => {
    console.log(`Orderservice is running on port ${port}`);
});
