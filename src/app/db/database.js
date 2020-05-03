var knex = require('knex');

var db = knex({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : 'd3s3nv',
        database : 'musics'
    }
});

module.exports = db;