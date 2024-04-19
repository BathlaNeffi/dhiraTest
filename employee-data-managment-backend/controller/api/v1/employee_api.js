const Employee =require('../../../models/employee');


module.exports.create=async(req,res)=>{
    try {
        console.log(req.query);
        const employee=await Employee.findOne({name:req.query.name});
        if(!employee){
            await Employee.create({
                name:req.query.name,
                salary:req.query.salary,
                department:req.query.department
            });
            return res.status(200).json({
                data:{
                    employee:{
                        name:req.query.name,
                        salary:req.query.salary,
                        department:req.query.department
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



module.exports.list=async(req,res)=>{
    try {
        const employees=await Employee.find({});

        // Formatting the data as per the need

        const myfunction= function(employee){
            return {
                name: employee.name,
                salary: employee.salary,
                department: employee.department
            }
        }
        const formatedEmployee = employees.map(myfunction);

        
        
        return res.json(200,{
            data:{
                employeeList:formatedEmployee
            },
            message: "List of all Products in Inventory"
        })
        
        
    } catch (error) {
        return res.json(500,{
            message:`Product Can not be listed there was an error kindly contact Development Team`
        })
    }
};
