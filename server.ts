

import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';
import * as fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('url', req.url);
    next();
});

let quiz;
app.post('/ws/quiz', (req, res, next) => {
    console.log('sys the quiz list', req.body);
    quiz = req.body;
    fs.writeFileSync('./quiz.json', JSON.stringify(quiz));
    res.json({
        message: 'Sysnc ok'
    });
});


const dir: string = '../exo/dist/exo';
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
