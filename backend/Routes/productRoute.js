let express = require('express')
let router = express.Router()

let productController = require('../Controller/productController')

let uploads  = require('../multerConfig.js')
router.post('/productSave',uploads.single('image'), productController.productSave )

router.post('/productSave',productController.productSave)

router.get('/getProduct',productController.getProduct)

router.get('/getProductById/:id', productController.getProductById)


router.delete('/deleteProduct/:id',productController.deleteProduct)

router.put('/putProduct/:id',productController.putProduct)

router.get('/searchProduct/:inp',productController.searchProduct)


module.exports = router
