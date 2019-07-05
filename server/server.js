const express = require('express');
const path = require('path');
require('./config/db')
//const User = require('./models/user')
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); //tells the server to connect to the dist html file
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const router = new express.Router()

app.use(express.static(DIST_DIR));
app.use(express.json()) //automatically parse incoming json to an objet
app.use(userRouter)



app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
