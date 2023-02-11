const mongoose=require('mongoose')
const validator=require('validator')
const userSchema =mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isemail(value)){
                throw new error("Invalid email");
            }
        }

    },
    phone:{
        type:Number,
        required:true,
        min:1
    },
    message:{
        type:String,
        required: true,
        min:2
    },
    date:{
        type:Date,
        default:Date.now()
    }
    
})
// U should be in capital
// model is method
// collection ka naam under the model (User) woh user anythink u let in bracket sholuld be singular
const User=mongoose.model("User",userSchema);

module.exports=User;
