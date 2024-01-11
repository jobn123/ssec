const request = require('./node_modules/request');

// const { method, parameters } = JSON.parse(process.argv[2])
// console.log('method:', method, 'parameters:', parameters)

/**
 * @description 格式化日期
 * @param {*} date
 * @returns {string}
 */
function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

request(`https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=sh000001,day,${formatDate(new Date())},,1,qfq`, {
}, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        // 交易日，开盘价，收盘价，最高价，最低价,总手
        console.log(info.data['sh000001']['day'][0]);
      }
})

// switch (method) {
//     case 'query':
//       query(parameters[0])
//       break
//   case 'open_url':
//       open(parameters[0])
//       break
//   case 'copy':
//       exec(`echo ${parameters[0]} | clip`)
//       break
//   case 'modify':
//       modify(parameters[0], parameters[1])
//       break
// }