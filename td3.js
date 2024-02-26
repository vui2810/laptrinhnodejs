const http = require('http');
const hostName ='localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    if(req.url ==='/'){
        res.end('Trang chủ ứng dụng');
    }else if(req.url === '/about'){
        res.end('Trang giới thiệu ứng dụng');
    }else if(req.url === '/detail'){
        res.end('Trang chi tiết ứng dụng');
    }else{
        res.end('Không tìm thấy trang');
    }
    
});
server.listen(port,hostName,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});