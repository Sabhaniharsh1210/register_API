var express = require('express');
var router = express.Router();
const { user_register, user_login, update_user, delete_user, get_user } = require('../controler/usercontroler')


/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index');
  });

  router.post('/', user_login );

// router.post('/', function(req,res){
//   var username = req.body.username;
//   var password = req.body.password;

//   var obj = {
//     "name":username,
//   }

//   var data = register.find(obj)
// })

  router.get('/deshboard', function(req, res, next) {
    res.render('deshboard', { title: 'deshboard index' });
  });

router.post('/register', user_register );

router.post('/update_user/:id', update_user); 
router.get('/delete_user/:id', delete_user); 
router.get('/:page', get_user); 
 

module.exports = router;
