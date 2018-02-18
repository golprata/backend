const express = require("express");
const mysql2 = require("mysql2");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded());

const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1981",
    database: "dbpos"
});
app.post('/contato', function (req, res) {
    
    const sql = "INSERT INTO contato (nome, email, nascimento, profissao, empresa, aceita_emails) VALUES (?, ?, ?, ?, ?, ?);";
    const valores = [req.body.nome, req.body.email, req.body.nascimento, req.body.profissao, req.body.empresa, req.body.aceita_emails];
    const sql2 = "INSERT INTO endereco (rua, bairro, cidade, estado, cep, contato_id) VALUES (?, ?, ?, ?, ?, ?);";
    conexao.query(sql, valores, function (erro, resultado) {
        var url = req.headers.referer;
        if (url.indexOf("contato.html") < 0) {
            url = url + "contato.html";
        }
                
        if (erro) {
            console.log("Erro ao tentar salvar os dados!");
            res.redirect(url + "?retorno=erro");
        } else {

            var endereco = [req.body.rua, req.body.bairro, req.body.cidade, req.body.estado, req.body.cep, resultado.insertId];
            conexao.query(sql2, endereco, function (erro2, resultado2) {
                if (erro2) {
                    console.log("Erro ao salvar o endereço");
                    
                } else {
                    console.log("Endereço salvo");
                }
            });
            console.log("Dados inserido no banco. Id:"+resultado.insertId);
            res.redirect(url + "?retorno=sucesso");
            //res.on({ msg: 'OK' });
           
        }
    });


});
console.log("inicializando...");
// a url que recebera o POST http://localhost:3000/contato
app.listen(3000);