const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        databae: process.env.DB_NAME,
        password: process.env.DB_PASS
    }

})

export default db


// db.select('id', 'name', 'price')
// .from('products')
// .then(rows => {
//     console.log(rows)
// }
//     )