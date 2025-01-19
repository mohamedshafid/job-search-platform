import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request){
  
    const cookie=await cookies();
    const token=cookie.get("token")?.value;

    if(!token){
        return NextResponse.json({
            success:false,
            message:"No token found"
        });
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);

    const userInfo=decoded;

    return  NextResponse.json(userInfo);
    
}