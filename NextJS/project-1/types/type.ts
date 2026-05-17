import mongoose from "mongoose";

export type Users={
    name:string;
    email:string;
    password:string
}

export type Products={
    name:string;
    description:string;
    price:number;
    category?:string;
    owner:mongoose.Schema.Types.ObjectId
}