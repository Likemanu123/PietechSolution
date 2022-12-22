const express = require('express');
const router = express.Router();
const userController = require("../controller/usercontroller")




// create user
router.post('/create',userController.createUser)  
router.get('/getName',userController.getUserName) 
router.get('/getAge',userController.getUserAge)
router.get('/getuser',userController.getpaginate)


router.get("/*",(req,res)=>{
    res.send("page not found")
})

module.exports = router;