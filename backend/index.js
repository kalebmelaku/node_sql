import express from "express";
import mysql from 'mysql';
import cors from 'cors'
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie',
})

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.json('This is backend')
})

app.get('/movies', (req, res) => {
    const q = "SELECT * FROM `movies` ORDER BY `id` DESC"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get('/movies/:id', (req, res) => {
    const id = req.params.id
    const q = "SELECT * FROM `movies` WHERE `id` = ?"
    db.query(q, [id], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/add', (req, res) => {
    const q = "INSERT INTO `movies` (`title`, `description`, `rating`, `date`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.rating,
        req.body.date
    ]

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM `movies` WHERE `id` = ?";
    db.query(q, [id], (err, res) => {
        if (err) {
            console.log('error deleting');
        }
    })
    

 
})
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const q = "UPDATE `movies` SET `title` = ?, `description` = ?, `rating` = ?, `date` = ? WHERE  id = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.rating,
        req.body.date,
    ];
    db.query(q, [...values, id], (err, res) => {
        if(err) console.log(err);
        return console.log('updated');
    })
});

app.listen(5000, ()=>{
    console.log('Connected to Backend');
})