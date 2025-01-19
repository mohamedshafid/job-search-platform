import { connectDB } from "@/database/dbconfig";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(){
    return new NextResponse("Mohamed Hafid from sign-in");
}

export async function POST(request){
    try{
         connectDB();
         const {email,password}=await request.json();

         const user=await User.findOne({email});

         if(!user){
            return NextResponse.json({
                success:false,
                message:"No user found with this email"
            });
        }
    
         const compare_password=await bcryptjs.compare(password,user.password);
         if(!compare_password){
            return NextResponse.json({
                success:false,
                message:"Invalid password"
            });
         }

         const token=jwt.sign({
            id:user._id,
            email:user.email
         },process.env.JWT_SECRET);

         const cookie=await cookies();
         cookie.set("token", token, {
           httpOnly: true,
           path: "/",
           sameSite: "lax",
         });
         
         return NextResponse.json({
           success:true,
           message:"user logged in successfully",
           token
         });
       
    }
    catch(error){
        return NextResponse.json({
            success:false,
            message:"error occured while logging the user"
        })
    }
}