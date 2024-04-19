const Employee =require('../../../models/employee');


module.exports.create=async(req,res)=>{
    try {
        console.log(req.query);
        const employee=await Employee.findOne({name:req.query.name});

        if(!employee){
            await Employee.create({
                name:req.query.name,
                salary:req.query.name,
                department:req.query.name
            });
            return res.status(200).json({
                data:{
                    employee:{
                        name:req.query.name,
                        salary:req.query.name,
                        department:req.query.name
                    }
                },
                message:"Employee Created "
            })
        }else{
            // if product is aready listed in the 
            return res.json(404,{
                message:`Employee already present :${employee.name}`
            })
        }
        
     
    } catch (error) {
        return res.json(500,{
            message:`Employee Can not be added there was an error kindly contact Development Team`
        })
    }
};
