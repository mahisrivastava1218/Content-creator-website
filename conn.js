const mongoose=require('mongoose')
//creating a database
const db="mongodb+srv://mahi1218:wj6zw24v4r@cluster0.ye73bni.mongodb.net/service?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true

}).then(()=>{
    console.log("connection successful")
}).catch((err)=>console.log('error'))
