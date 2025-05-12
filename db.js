const sqlite = require('sqlite3')
const { open } = require('sqlite')
async function main() {
    try{
    const db = await open({
   filename: './banco.db',
     driver: sqlite.Database
    })
    await db.exec(`CREATE TABLE usuários (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )`)

    const usuários = await db.all(`SELECT * FROM usuários`)

    await db.run(`INSERT INT usuários (vicenzo, vicenzo_librelotto@estudante.sesisenai.org.br))`)


    
    await db.close()
} catch (err) {
    console.log(err)
}
}

main()

//criar uma conexão com o banco
//executar um script simples de criação de tabela
//executar um script simples adicionando um usuário 
//executar um script simples de leitura na tabela
//encerrar a conexão