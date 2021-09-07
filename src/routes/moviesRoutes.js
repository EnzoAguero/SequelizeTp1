const express = require('express');
const router = express.Router();
const {list,detail,newest,recomended} = require('../controllers/moviesController');

router.get('/',list);
router.get('/new',newest);
router.get('/recommended',recomended);
router.get('/detail/:id',detail);


module.exports = router;