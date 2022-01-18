const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.get("/image",(req,res) => {
    const img = fs.readFileSync('bai1/image.png');
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.end(img);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})