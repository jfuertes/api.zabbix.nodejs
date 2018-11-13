var zabbix = require('../lib/zabbix');

var client = new zabbix('http://192.168.2.28/zabbix/api_jsonrpc.php', 'Admin', 'zabbix');

var data;
// Should be call login at the first time
client.login(function(error, resp, body) {
    client.call('item.get', {'output': 'extend', 'hostids': '10084'}, function(error, resp, body) {
	 console.log(body);
	console.log("=============================================================000");
	console.log("itemid, name, key_ ");
	for(var i in body) {
    		console.log(body[i].itemid+" , "+body[i].name+" , "+body[i].key_);  // (o el campo que necesites
	}
	

	
    });
});

