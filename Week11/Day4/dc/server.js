import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => res.send('Hello From Express'))

app.post('/api/world', (req, res) => {
    const data = req.body
    console.log(data)
    res.json({ message: data.post });

})


console.log('start server')
app.listen(3000)