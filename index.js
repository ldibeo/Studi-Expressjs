
// costanti dichiarate
const express = require ('express')
const app = express()
const port = 4000
let users = [
    {id: 1, name: 'Luca', age: 28},
    {id: 2, name: 'Sofia', age: 25},
    {id: 3, name: 'Marco', age: 35},
    {id: 4, name: 'Maria', age: 27},
    {id: 5, name: 'Chiara', age: 32},
];

// controlla se funziona homepage
app.get('/', (req, res) => {
    res.send('Funziona!!!')
})

// controlla se funziona page users

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id', (req, res) => {

    // controlla se esiste l'utente
    let user = users.find(c => c.id === parseInt(req.params.id));
    if (! user) {
        res.status(404).send(`L\'utente con ID ${req.params.id} NON esiste.`);
        return;
    } 
    res.send(`L\'utente con ID ${JSON.stringify(user.id)} esiste, si chiama ${user.name} e ha ${user.age} anni di età.`);
});

// indica in quale port viene fatto il display

app.listen(port, () => {
    console.log(`Funziona. Vai al port ${port}.`)
})