const express = require("express"); 
const app = express(); 


app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site site!</h1><br> <strong>Navegue para proxima rota com /equipe ou /sobre</strong>");
    
})


app.get("/equipe", function(req,res){
    res.send("<h1>Equipe: Caio Vinicuis - Henry Marx - Joaquim Aires</h1>");
})

app.get("/sobre", function(req,res){
    res.send("<h1>Sobre o trabalho</h1><br>Criar uma aplicação node com 3 rotas diferentes e subir para uma maquina virtual AWS usando o GitHub como repositório");
})


app.listen(process.env.PORT ?? 3000,function(erro){  
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})