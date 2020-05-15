#!/usr/bin/env node

const mysql = require('mysql');

const dbTestConnection = (connectioProperties) => {
    const connection = mysql.createConnection(connectioProperties);

    return new Promise((resolve, reject) => {
        connection.connect((err) => err ? reject(err) : resolve(true));
    });
};

module.exports = dbTestConnection;