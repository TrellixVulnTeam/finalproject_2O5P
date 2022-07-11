const router = new require('express')()

const {create, getAll, getDel} = require('../controllers/corpController')

router.get('/add', create);
router.get('/all', getAll);
router.get('/del', getDel);

module.exports = router
