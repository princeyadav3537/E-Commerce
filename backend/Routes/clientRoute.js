let express = require('express')
let router = express.Router()
let clientController = require('../controller/clientController.js')
let uploads  = require('../multerConfig.js')

router.post('/clientSave',uploads.single('image'), clientController.clientSave)

router.post('/clientLogin', clientController.clientLogin)


router.post('/createClient/:unique', clientController.createClient)

router.get('/getClient/:unique', clientController.getClient)


module.exports = router