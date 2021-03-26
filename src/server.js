const express = require('express');
const app = express();
const path = require('path');
const pages = require('./pages.js');

//Arquivos estáticos
app.use(express.static('public'))
// Habilita req.body
app.use(express.urlencoded({ extended: true }))

//Configurar o template engine
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

//Rotas
//Index
app.get('/', pages.index);
//Selecionar todos os pets
app.get('/find-dog', pages.findDog);
//Remover um pet
app.delete('/find-dog/:id', pages.removeDog);
//Adicionar um pet
app.get('/register-dog', pages.registerDog);
app.post('/save-dog', pages.saveDog );
//Selectionar somente um pet
app.get('/dog/:id', pages.dog);
//ALterar pet
app.get('/edit-dog/:id', pages.getEditDog);
app.post('/edit-dog/update/:id', pages.editDog);


app.listen('3333', () => {
  console.log('Server is running!')
})