const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host: 'surus.db.elephantsql.com',
        port: '5432',
        user: 'lmwjdwas',
        databae: 'lmwjdwas',
        password: 'JUv_uPW4UIHEWNjgRr6W2ffBJYzde-Gp'
    }

})

db.select('id', 'name', 'price')
.from('products')
.then(rows => {
    console.log(rows)
}
    )