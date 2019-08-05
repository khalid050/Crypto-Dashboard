const express = require('express');
const path = require('path');
 require('./config/db')
const cors = require('cors')
const userRouter = require('./routers/user')
const selectedRouter = require('./routers/selectedCurrencies');
const bcrypt = require('bcrypt')


const app = express();
const port = process.env.PORT || 3000;
const bundleDir = path.join(__dirname, '../bundle'); //tells the server to connect to the bundle html file
const HTML_FILE = path.join(bundleDir, 'index.html');

app.use(express.static(bundleDir));
app.use(cors())

app.use(express.json()) //automatically parse incoming json to an objet
app.use('/',selectedRouter)

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
