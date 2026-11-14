let connect = require('connect');
let http = require('http');

let app = connect();

app.use('/home',function(req,res){
    res.end('hello from connect\n');
});

app.use('/about',function(req,res){
    res.end('hello from about\n');
});

http.createServer(app).listen(4000,() =>{
    console.log(`Server running at 127.0.0.1:4000`);
}); 