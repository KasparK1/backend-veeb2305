const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Simple API homepage');
})

app.get('/api/items', (req, res) => {
    res.send('Sending a list of items from the DB ...')
})
app.post('/api/items', (req, res) => {
    res.status(201).send('Sent the new data to the DB ...')
})

app.listen(5070, () => {
    console.log("Server running on port 5070");
})