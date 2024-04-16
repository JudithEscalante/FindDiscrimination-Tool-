
const express = require('express');
const path = require ('path');


const port =  process.env.PORT || 5000 ;
const host = '0.0.0.0'  
const app = express();


app.use(express.static(__dirname))

app.get('*', (req, res) => {
if (req.path.endsWith('bundle.js')) {
        res.sendFile(path.resolve(__dirname, './docs/bundle.js'));
    } else {
        res.sendFile(path.resolve(__dirname, './docs/index.html'));
    }

});

app.listen(port, host);
console.log('Server started');



