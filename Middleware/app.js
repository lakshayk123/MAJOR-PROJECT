const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })



app.use((req,res,next)=>{
    console.log("hi i am md");
    next();
})

app.use((req,res,next)=>{
    console.log("hi i am md2");
    next();
})



app.get("/",(req,res)=>{
    res.send("Hi , I am root ");
})


app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.use("/api",(req,res,next)=>{
    let {token}= req.query;
    if(token === "giveaccess"){
         return next();
    }
    // res.send("ACCESS DENIED !");
    throw new Error ("ACCESS DENIED !")
});

app.get("/api",(req,res)=>{
    res.send("data");
})

app.listen(8080,()=>{
    console.log("server listening to port 8080");
})
