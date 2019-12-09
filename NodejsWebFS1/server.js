//File System server
var http = require('http');
var fs = require('fs');
var async1 = require('async');
var fileName = 'myText.txt';

//append file
fs.appendFile(fileName, Date().toLocaleLowerCase(), (err) =>
{
    if (err) throw err;
    console.log('Saved!');
});

http.createServer((req, res) =>
{
    //read Page1.html and send it
    fs.readFile('Page1.html', function (err, data)
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        //read 'myText.txt'
        fs.readFile(fileName, (err, data) => {
            res.write(data);
            res.end();
        });
    });    
}).listen(8080);