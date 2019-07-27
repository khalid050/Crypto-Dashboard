const router = require('express').Router();
let Currency = require('../models/selectedCurrencies');


// router.route('/').post((req, res) => {
//     const currency = req.body.currency;
   
//     const newCurrency = new Currency({
//       currency,
    
//     });
  
//     newCurrency.save()
//     .then(() => res.json('added'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });

  router.get('/',(req, res) => {
    Currency.find({})
      .then(currency => res.json(currency))
      .catch(err => res.status(400).json('Error: ' + err));
  });

 


  module.exports = router;

