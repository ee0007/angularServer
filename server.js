const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use(function (req, res, next) {
    console.log('url', req.url);
    next();
});
const dir ='../exo/dist/exo';
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
