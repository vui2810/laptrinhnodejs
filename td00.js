//bất đồng bộ
const fs = require('fs');
fs.readFileSync('data.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
console.log('Đọc tệp bắt đầu, nhưng luồng chính tiếp tục chạy...');