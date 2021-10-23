const { Router } = require('express');
const {getAll,getOne,createUser,updateUser,deleteUser} = require('../controllers/users');
const {userValidationRules, validate, userValidationPutRules} = require('../middlewares/users');

const router = Router();

router.get('/',getAll);
router.get('/:id',getOne);
router.post('/',userValidationRules,validate,createUser);
router.put('/:id',userValidationPutRules,validate,updateUser);
router.delete('/:id',deleteUser);


module.exports = router;