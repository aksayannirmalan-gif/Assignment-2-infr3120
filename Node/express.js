let express = require('express');
let app = express()
let port = 4000

app.get('/',(req,res) => {
    res.end('hello from express\n');
});


app.get('/home',(req,res) => {
    res.end('Home page\n');
});

app.get('/about',function(req,res){
    res.end('About page\n');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
/** 
http.createServer(app).listen(4000,() =>{
    console.log(`Server running at 127.0.0.1:4000`);
}); 
*/