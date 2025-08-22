
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/analyze', (req, res) => {
    // Dummy image recognition route
    res.json({ result: "Recognized text from image (stub)" });
});

app.listen(port, () => {
    console.log(`Documate backend running at http://localhost:${port}`);
});
