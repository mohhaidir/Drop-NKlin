const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers');
const session = require('express-session');


app.set('view engine', 'ejs');
app.use(session({
  secret: 'dropnklin'
}));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`PORT: ${port} <--------------> SUCCESSFULLY RUNNING!!`)
});