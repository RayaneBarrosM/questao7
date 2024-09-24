app.post('/cadastrar', (req, res) => {
    const { nome, email, telefone } = req.body;
    console.log(`Aluno cadastrado: ${nome}, ${email}, ${telefone}`);
    res.redirect('/Aluno'); 
});

app.post('/atualizar', (req, res) => {
    const { id, nome, email, telefone } = req.body;
