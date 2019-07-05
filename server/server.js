const express = require('express');
const path = require('path');
require('./config/db')
const User = require('./models/user')

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); //tells the server to connect to the dist html file
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));


app.use(express.json()) //automatically parse incoming json to an objet


app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save()
    .then(() => {
      res.send(user)
    })
    .catch((e) => {
      res.status(400).send(e)
    })
})


app.get('/users', (req,res)=>{
  // fetch all users stored in the database

  User.find({})
  .then((users))
})

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
