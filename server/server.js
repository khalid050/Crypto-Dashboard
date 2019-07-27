const express = require('express');
const path = require('path');
require('./config/db')
const cors = require('cors')
const userRouter = require('./routers/user')
const selectedRouter = require('./routers/selectedCurrencies');
const db = require('./config/db')

//const bcrypt = require('bcrypt')


const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); //tells the server to connect to the dist html file
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.use(cors())

app.use(express.json()) //automatically parse incoming json to an objet
app.use('/',selectedRouter)



app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
