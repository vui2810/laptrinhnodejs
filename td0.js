//Đồng bộ
const fs = require('fs');
let str = fs.readFileSync('data.txt','utf8');
    console.log(str);

console.log('Đọc tệp bắt đầu, nhưng luồng chính tiếp tục chạy...');