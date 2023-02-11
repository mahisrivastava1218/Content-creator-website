const express=require('express');

const path=require('path')
const hbs=require('hbs')
require("./conn")
const app=express()

const User=require('./msg')

const port=process.env.PORT || 8000;  //it makes easy yto process port
// //setting the path

// console.log(path.join(__dirname,"./public"));
const staticpath=path.join(__dirname, "../public");
const viewpath=path.join(__dirname, "../templates/views");
const partialpath=path.join(__dirname, "../templates/partials");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
// data that we get express don't have to any idea to get data
app.use(express.urlencoded({extended:false}))  
app.use(express.static(staticpath))
app.set('view engine','hbs');
app.set('views',viewpath)
hbs.registerPartials(partialpath)

// // app.set('views', path.join(__dirname, 'views'))


// // console.log(path.join(__dirname, 'views'))


//routinng
//app.get(path,callback)
app.get("/",(req,res)=>{
    
    res.render("index")
})
// app.get("/contact",(req,res)=>{
//     res.render("contact")
// })
// async is used to handle the error
app.post('/contact',async(req,res)=>{
    try{
        // res.send(req.body)       //req.body user jo data enter krrha hoga woh show hoga
        const userData=new User(req.body);
        await userData.save()
        res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log('hello you are land')
})

