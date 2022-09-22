const http = require('node:http')
const connect = require('connect');
const sirv = require('sirv')

const assets = sirv('assets')

const app = connect();
app.use(assets)
 
http.createServer(app).listen(3000);