const express= require('express');
const router=express.Router();
const employeeController=require("../../../controller/api/v1/employee_api");

router.post('/create',employeeController.create);
router.get('/list', employeeController.list);

module.exports=router;