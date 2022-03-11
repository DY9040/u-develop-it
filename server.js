const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db =mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        //Your MYSQL password
        password: 'Moomilk123#@!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//Defualt response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});