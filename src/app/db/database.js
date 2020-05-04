const knex = require('knex');
const databaseTestConnection = require('./databaseTestConnection');

const connectionProperties = {
    host : 'localhost',
    user : 'root',
    password : 'd3s3nv',
    database : 'musica_catalogo'
};

const db = knex({
    client : 'mysql',
    connection : connectionProperties
});

const connectionTest = () => {     
    return databaseTestConnection(connectionProperties).then(() => true).catch(err => {
        console.error(err);
        return false;
    });
};

module.exports = { db, connectionTest };