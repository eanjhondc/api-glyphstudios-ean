const router = require('express').Router();
const Signup = require('../services/signup');
const validate = require('../middlewares/validate');
const signupValidationRules = require('../validators/signup');
const { response, SUCCESS, VALIDATION_ERROR } = require('../core/response');


// router.post('/signup', signupValidationRules.createUser, validate, (req, res) => {
//   Signup.createUser(req.body)
//   .then(result => {
//     return res.success(response(SUCCESS, '', result));
//   }).catch(err => {
//     res.error(response(INTERNAL_SERVER_ERROR,'',err));
//   });
// })

router.post('/signup', async (req, res) => {
    try{
        let result = await Signup.createUser(req.body);
        return res.success(response(SUCCESS, '', result));
        
    }catch(err){
        return res.error(response(INTERNAL_SERVER_ERROR,'',err));
    }
    
    
})

module.exports = router;