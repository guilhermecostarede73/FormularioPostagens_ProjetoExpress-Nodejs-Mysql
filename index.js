const express = require("express");
const app =  express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const Post = require('./models/Post')


//Config - Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas - inicio 
//Redirecionamento de pagina
app.get('/',function(req, res){
    Post.all().then(function(posts){
        console.log(posts);
        res.render('home',{posts: posts}); 
    });    
});

app.get('/cad', function(req, res){
    res.render('formulario') //formulario.handlebars 
})

//Parametro para recebe os dados do formulario.handlebars
app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Erro ao criar Post >>> " + erro)
    })
});
//Rota - fim 

//Servidor URL
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});