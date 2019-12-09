//File System server
var http = require('http');
var fs = require('fs');
var async1 = require('async');
var fileNameSrc = 'myText.txt';
var fileNameBackUp = 'myTextBackUp.txt';

//append file
fs.writeFile(fileNameSrc, Date().toLocaleLowerCase(), (err) =>
{
    if (err) throw err;
    console.log('Saved!');


    try
    {
        fs.copyFile(fileNameSrc, fileNameBackUp, (err) => {
            if (err) throw err;
            console.log('Copied!');
        });
    }
    catch (e) {
        console.log(e);
    }
});


http.createServer((req, res) =>
{
    //read Page1.html and send it
    fs.readFile('Page1.html', function (err, data)
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        //read 'myText.txt'
        fs.readFile(fileNameSrc, (err, data) => {
            res.write(data);
            res.end();
        });
    });    
}).listen(8080);