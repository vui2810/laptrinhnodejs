//tạo server với module http
const http = require('http');
const hostName ='localhost';
const port = 3000;
const bookList = ['HTML','CSS','JavaScript'];
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html; charset=utf-8');
    let htmlStr = `<h1> Danh sách khoá học</h1>
                     <ul>
                    `;
    bookList.forEach((item)=>{
        htmlStr += `<li>${item}</li>`;
    })
    htmlStr += `</ul>`;
    res.end(htmlStr);
});
server.listen(port,hostName,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});