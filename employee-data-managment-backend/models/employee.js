// Importing Mongoose for MongoDB
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:
    {
        type : String,
        required : true,
        unique: true
    },
    salary:
    {
        type : Number,
        required : true
    },
    department:
    {
        type : String,
        required : true
    },
   
},{
    timestamps: true,
});



const Employee = mongoose.model('Employee', employeeSchema);

module.exports= Employee;