//tạo server với module http
const http = require('http');
const hostName ='localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end('Chào các bạn lớp C22TH');
});
server.listen(port,hostName,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});