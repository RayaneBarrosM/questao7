const mysql = require('mysql2');

class Dao {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fatec123',
            database: 'escola'
        });
    }

    gravarAluno(nome, email, telefone) {
        const query = 'INSERT INTO aluno (nome, email, telefone) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            this.connection.query(query, [nome, email, telefone], (err, results) => {
                if (err) return reject(err);
                resolve(results.insertId);
            });
        });
    }

    atualizarAluno(id, nome, email, telefone) {
        const query = 'UPDATE aluno SET nome = ?, email = ?, telefone = ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.connection.query(query, [nome, email, telefone, id], (err, results) => {
                if (err) return reject(err);
                resolve(results.affectedRows);
            });
        });
    }
}

module.exports = new Dao();
