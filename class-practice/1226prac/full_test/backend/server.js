import express from 'express';
const app = express();
const port = process.env.PORT || 4000 

import bodyParser from 'body-parser';
// Parses the text as JSON and exposes the resulting // object on req.body.
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Received a GET HTTP method'); });
app.post('/', (req, res) => { 
    res.send('Received a POST HTTP method'); 
    console.log(req.body.text)
});

app.post('/users', (req, res) => { res.send('POST HTTP method on users resource'); })
app.put('/users/:userId', (req, res) => { res.send(`PUT HTTP method on users/${req.params.userId} resource`); });
app.put('/', (req, res) => { res.send('Received a PUT HTTP method'); });
app.post('/', (req, res) => { res.send('Received a DELETE HTTP method'); });
 
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);

