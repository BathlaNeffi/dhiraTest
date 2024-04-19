// Controller to manage products


// Importing the Product model

const Product=require('../../../models/product');

// Action to create a product uinsg api 
module.exports.create=async(req,res)=>{
    try {
        // Fetching the product by the query if the product is already present
        const product=await Product.findOne({name:req.query.name});
        // if product does not exist the create one in the database
        if(!product){
            await Product.create({
                name:req.query.name,
                quantity:req.query.quantity
            });
            return res.json(200,{
                data:{
                    product:{
                        name:req.query.name,
                        quantity:req.query.quantity
                    }
                },
                message:"Product added Successfully"
            })
        }else{
            // if product is aready listed in the 
            return res.json(404,{
                message:`Product already avaliable in the List with Quantity:${product.quantity}`
            })
        }
        
     
    } catch (error) {
        return res.json(500,{
            message:`Product Can not be created there was an error kindly contact Development Team`
        })
    }
};


module.exports.list=async(req,res)=>{
    try {
        const product=await Product.find({});

        // Formatting the data as per the need

        const myfunction= function(product,index){
            return {
                id: product.id,
                name: product.name,
                quantity: product.quantity
            }
        }
        const formatedProducts = product.map(myfunction);

        
        
        return res.json(200,{
            data:{
                product: formatedProducts 
            },
            message: "List of all Products in Inventory"
        })
        
        
    } catch (error) {
        return res.json(500,{
            message:`Product Can not be listed there was an error kindly contact Development Team`
        })
    }
};



module.exports.delete=async (req,res)=>{
    try {
        let deltedProduct= await Product.findByIdAndDelete(req.query.id);
        if(deltedProduct){
            return res.json(200,{
                data: {
                    message: "product deleted"
                    }
            })
        }else{
            return res.json(404,{
                message:"Product Can not be deleted"
            })
        }

        
    } catch (error) {
        return res.json(500,{
            message:`Product Can not be Deleted there was an error kindly contact Development Team`
        })
    }
};



module.exports.updateQuantity=async(req,res)=>{
    try {

        const productUpdated=await Product.findByIdAndUpdate(req.params.id,{quantity:req.query.number})
        if(productUpdated){
            return res.json(200,{
                data: {
                    message: "product Updated"
                    }
            })
        }else{
            return res.json(404,{
                message:"Product Can not be Updated"
            })
        }
    } catch (error) {
        return res.json(500,{
            message:`Product Can not be Updated there was an error kindly contact Development Team`
        })
    }
}