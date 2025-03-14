const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req,res) => {
    return json({message: 'Express is working! Shekainah Prajes Gaceta '})
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
