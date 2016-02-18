let express = require('express');
let app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, () => {
  console.log('Rota Tinder is Running');
});
