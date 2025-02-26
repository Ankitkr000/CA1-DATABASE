const mongoose =require("mongoose")
const Item=require("./itemDetail")

const restaurantSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    itemsArr:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item",
    }]
})

module.exports=mongoose.model("Restaurant",restaurantSchema)