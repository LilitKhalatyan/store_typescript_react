const express = require('express');
const verify = require('../Middlewares/verify');
const productController = require('../Controllers/productController');
const { verifyIt } = verify;
const { addOne, getAll, getOne, updateOne, deleteOne, download } = productController;

const router = express.Router();

router.post('/add', verifyIt, addOne);
router.get('/all', verifyIt, getAll);
router.get('/:id', verifyIt, getOne);
router.put('/:id', verifyIt, updateOne);
router.delete('/:id', verifyIt, deleteOne);

router.get('/download', download);

module.exports = router;