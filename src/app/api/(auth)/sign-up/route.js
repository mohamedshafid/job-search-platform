import { connectDB } from "@/database/dbconfig";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function GET(){
    return new Response("Mohamed Hafid");
}

// CREATING AN USER
export async function POST(request){
    try{
         connectDB();
        const {name,email,password}=await request.json();

        const user_exist=await User.findOne({email});

        if(user_exist){
            return NextResponse.json({
                success:false,
                message:"user already exist with this email"
            });
        }

        const hashed_password=await bcryptjs.hash(password,10);

        const user=new User({
            name,
            email,
            password:hashed_password
        });

        const new_user=await user.save();

        return NextResponse.json({
            success:true,
            message:"user created successfully",
            new_user
        })
    }catch(error){
        return NextResponse.json({
            success:false,
            message:"Error while creating an user"
        });
    }
}   