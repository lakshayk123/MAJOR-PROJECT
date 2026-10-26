const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://your-default-image-url.com/image.jpg",
        set: (v) =>
            v === ""
                ? "https://your-default-image-url.com/image.jpg"
                : v
    }
    },
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;