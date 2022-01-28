const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

let port = process.env.PORT || 5555;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});