

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();
const PORT = 3000;


app.use(loggerMiddleware); 
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send({ message: "Welcome! Check the console for the logger middleware output." });
});


app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.status(201).send({ message: "Data received and logged.", your_data: req.body });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
