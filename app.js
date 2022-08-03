const express = require('express');
const app = express();
const http = require('http');
// const fs = require('fs');
// app.listen(8181);

// Establishing the port
const PORT = process.env.PORT || 8181 ;
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
  

var emprouter = require('./router/emprouter');
app.set('view engine','ejs');
app.use('/employee',emprouter);

// app.get('/', (req, res) => {
//     fs.res.sendFile('./index.html');
// });



var mysql = require('mysql');
var mysql_config = {
    host:'us-cdbr-east-06.cleardb.net',
    user:'b293e27f3df5c3',
    password:'a71255e4',
    database:'heroku_27f255a19ce763f'
};


function disconnect_handler() {
   let conn = mysql.createConnection(mysql_config);
    conn.connect(err => {
        (err) && setTimeout('disconnect_handler()', 2000);
    });

    conn.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            // db error 重新連線
            disconnect_handler();
        } else {
            throw err;
        }
    });
    exports.conn = conn;
}
disconnect_handler();

exports.disconnect_handler =  disconnect_handler;