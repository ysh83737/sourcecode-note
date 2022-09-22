var connect = require('connect');
var http = require('node:http');
 
var app = connect();

app.use('/foo', function (req, res, next) {
  console.log('middleware foo');
  next();
})
app.use('/bar', function (req, res, next) {
  console.log('middleware bar');
  next();
})

app.use(function(req, res){
  res.end('Hello from Connect!\n');
});
 
http.createServer(app).listen(3000);