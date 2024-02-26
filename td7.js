const http = require('http');
const url = require('url');
const port = 3000;
const hostName = 'localhost'
const server = http.createServer((req, res) => {
// Phân tích URL yêu cầu
const parsedUrl = url.parse(req.url, true); console.log(parsedUrl);
// Lấy giá trị tham số từ query string
const queryParameters = parsedUrl.query;
// Ví dụ: URL là http://localhost:3000/?name=John&age=30
const name = queryParameters.name; // 'John'
const age = queryParameters.age; // '30'
// Gửi phản hồi về cho client
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end(`Name: ${name}, Age: ${age}`);
});
server.listen(port, hostName, () => {
 console.log(`May chu dang chay tai port ${port}`);
});
