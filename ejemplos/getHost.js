var zabbix = require('../lib/zabbix');

var client = new zabbix('http://192.168.2.28/zabbix/api_jsonrpc.php', 'Admin', 'zabbix');

var data;
// Should be call login at the first time
client.login(function(error, resp, body) {
    client.call('host.get', {'output': 'extend'}, function(error, resp, body) {
	 console.log(body);
	console.log("=============================================================000");
	console.log("hostid, name");
	for(var i in body) {
    		console.log(body[i].hostid+" , "+body[i].name);  // (o el campo que necesites
	}
	

	
    });
});

