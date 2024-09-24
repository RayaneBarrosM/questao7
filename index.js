const express = require('express')
const app = express()
const por = 300;

app.use(express.urlencoded({ extended: true }));

server.get('/Aluno', (req, res) =>{
  res.send(`
    <form>
    <div class="mb-3">
        <label for="exampleInputId" class="form-label">Id address</label>
        <input type="id" class="form-control" id="exampleInputEmail1" >
        <div id="idHelp" class="form-text">id</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputNome" class="form-label">Nome </label>
        <input type="nome" class="form-control" id="exampleInputEmail1" aria-describedby="nomeHelp">
        <div id="nome" class="form-text">nome</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">email</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputTelefone" class="form-label">Telefone</label>
        <input type="telefone" class="form-control" id="exampleInputTelefone">
      <button type="submit" class="btn btn-primary">Cadastrar</button>
      <button type="submit" class="btn btn-primary">Atualizar</button>

    </form>
`)
})