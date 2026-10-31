const express= require("express");
const app= express();
const mongoose= require("mongoose");
const Listing=require("./models/listing.js");
const path = require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");


app.set("view engine" ,"ejs");
app.engine("ejs", ejsMate);
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/",(req,res)=>{
    res.send(`hi am root`);
})

// Index Route
app.get("/listings",async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})

//New  Route for  create listing
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

// route matching concept

//Show route 
app.get("/listings/:id",async (req,res)=>{
    let {id}= req.params;
    let listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})

//create post req
app.post("/listings",async (req,res)=>{
    const newListing = new Listing (req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});


// edit
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}= req.params;
    let listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

app.put("/listings/:id",async (req,res)=>{
    let{id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing},{runValidators:true});
    res.redirect(`/listings/${id}`);
})


// delete
app.delete("/listings/:id", async (req,res)=>{
        let{id}= req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");

})








// comment it our after one time execution!
// app.get("/testlisting",async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"My new villa",
//         description:"By the beach",
//         price:1200,
//         location:"calangute ,goa",
//         country:"India"
//     });
//     await sampleListing.save()
//     console.log("sample was solved");
//     res.send("successful testing")
// });

app.listen(8080,()=>{
    console.log(`server is listening to port 8080`);
})
