const express = require('express');
const app = express();
let fs = require('fs');
// app.listen(8181);

// Establishing the port
const PORT = process.env.PORT || 8181 || 8000 || 5000 || 5050 || 5500;
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
  

var emprouter = require('./router/emprouter');
app.set('view engine','ejs');
app.use('/employee',emprouter);

// app.get('/', (req, res) => {
//     res.sendFile('app.html');
// });

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port number: ${port}`);

});
