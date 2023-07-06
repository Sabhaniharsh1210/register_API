var express = require('express');
var router = express.Router();
const { user_register, user_login, update_user, delete_user, get_user } = require('../controler/usercontroler')


/* GET home page. */
router.post('/register', user_register );
router.post('/', user_login );
router.post('/update_user/:id', update_user); 
router.get('/delete_user/:id', delete_user); 
router.get('/:page', get_user); 
 

module.exports = router;
