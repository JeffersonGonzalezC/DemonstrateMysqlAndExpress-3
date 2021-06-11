const mysql = require('mysql')
const util = require('util');

var pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql1.gear.host',
        user: 'aca311week3day1',
        password: 'Wq87E!7mUF~7',
        database: 'aca311week3day1',
        multipleStatements: true
      });


//instance.end();
const query = util.promisify(pool.query).bind(pool);
module.exports = query;
