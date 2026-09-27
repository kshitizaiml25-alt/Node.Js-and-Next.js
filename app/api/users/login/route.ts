import {connect } from "@/dbconfig/dbconfig"
import User from "@/models/userModel.js"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


connect()

export async function POST(req: NextRequest) {
    try {
    const reqBody = await req.json()
    const {username,email,password} = reqBody;

    console.log(reqBody); 

    const user = await User.findOne({email})

    if(!user){  
        return NextResponse.json({error: "User not found"}, {status: 404});
    }

    const validpassword = await bcryptjs.compare(password, user.password)
    if(!validpassword){
        return NextResponse.json({error: "Invalid password"}, {status: 400});

    }catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
