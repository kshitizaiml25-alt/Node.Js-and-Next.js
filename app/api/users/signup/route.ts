import {connect } from "@/dbconfig/dbconfig"
import User from "@/models/userModel.js"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username,email,password} = reqBody

        console.log(reqBody);

        const user  = await User.findOne({email})

        if (user) {
            return NextResponse.json({error: "User already exist"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
        }).save()

        console.log(newUser);

        return NextResponse.json({
            message:"User Created Successfully",
            success : true,
            newUser
        })
        
        
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}



connect()