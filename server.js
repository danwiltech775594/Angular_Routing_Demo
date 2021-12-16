//Install express server
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')
app.use(cors())
// Serve only the static files from ths dist directory
app.use(express.static(__dirname + '/dist/routing-demo'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/routing-demo/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.Port || 8080);