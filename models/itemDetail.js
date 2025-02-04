const mongoose=require("mongoose")

const itemSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },

    Price:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model("Item",itemSchema)