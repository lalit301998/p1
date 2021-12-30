import express from 'express'
const router = express.Router();
var userctrl = require('../controllers/usercontroller');
router.post('/add',userctrl.addUser); 
router.get('/getalluser',userctrl.findUser)
router.put('/updatuser',userctrl.updateUser)
router.delete('/deleteuser',userctrl.delUser)
router.get('/onetone',userctrl.onetone)
router.get("/belongTo",userctrl.belongTo)

export default router
