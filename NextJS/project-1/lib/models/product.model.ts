import mongoose from "mongoose";
import { Products } from "@/types/type";


const productSchema=new mongoose.Schema<Products>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Product =
    mongoose.models.Product ||
    mongoose.model < Products>("Product", productSchema);

export default Product