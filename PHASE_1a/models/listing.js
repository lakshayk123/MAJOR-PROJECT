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
    image:{
        type:String,
        default:
            "https://www.google.com/imgres?q=not%20available%20images&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F025%2F903%2F813%2Fnon_2x%2Fnot-available-and-not-allowed-icon-concept-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F25903813-not-available-and-not-allowed-icon-concept&docid=2xt-pJ8lwmv58M&tbnid=ltJ0T5Ag6Vaa6M&vet=12ahUKEwibypO429aXAxUsiuEIHWm5DrUQnPAOegQIOBAA..i&w=980&h=980&hcb=2&ved=2ahUKEwibypO429aXAxUsiuEIHWm5DrUQnPAOegQIOBAA",
        set:(v)=> 
            v==="" ? "https://www.google.com/imgres?q=not%20available%20images&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F025%2F903%2F813%2Fnon_2x%2Fnot-available-and-not-allowed-icon-concept-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F25903813-not-available-and-not-allowed-icon-concept&docid=2xt-pJ8lwmv58M&tbnid=ltJ0T5Ag6Vaa6M&vet=12ahUKEwibypO429aXAxUsiuEIHWm5DrUQnPAOegQIOBAA..i&w=980&h=980&hcb=2&ved=2ahUKEwibypO429aXAxUsiuEIHWm5DrUQnPAOegQIOBAA "
        : v
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