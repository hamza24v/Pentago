const express = require("express");
const path = require("path");
const app = express();
var io = require('socket.io')(http);

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

// socket example form chat example
io.on('connection', function(socket){
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


app.listen(3000);
