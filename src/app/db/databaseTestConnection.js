#!/usr/bin/env node

const mysql = require('mysql');

const databaseTestConnection = (connectioProperties) => {
    const connection = mysql.createConnection(connectioProperties);

    return new Promise((resolve, reject) => {
        connection.connect((err) => err ? reject(err) : resolve(true));
    });
};

module.exports = databaseTestConnection;