var zabbix = require('../lib/zabbix');

var client2 = new zabbix('http://192.168.2.28/zabbix/api_jsonrpc.php', 'Admin', 'zabbix');
client2.login(function(error, resp, body) {
    console.log(body)
});
