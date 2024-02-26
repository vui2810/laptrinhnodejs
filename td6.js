const querystring = require('querystring');
const obj = {name:'john',age:30};
//Chuyển đổi một đối tượng javascript thành chuỗi truy vấn
const objToQueryString = querystring.stringify(obj);
console.log(objToQueryString);
//Chuyển đổi một chuỗi truy vấn thành đối tượng
const queryStr = 'name=john&age=30';
const strToObj = querystring.parse(queryStr);
console.log(strToObj.name,strToObj.age);