"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {Axios} from "axios";

export default function LoginPage () {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Login Page</h1>
            <hr/>
            <label htmlFor="email">email</label>
            <input
            className="border border-gray-300 rounded-md p-2 mb-4 bg-white text-black"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
            />
            <label htmlFor="password">Password</label>
            <input
            className="border border-gray-300 rounded-md p-2 mb-4 bg-white text-black"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
            />
            <button
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none "
                onClick={onLogin}
            >
                Login 
            </button>
            <Link href="/signup">Visit SignUp Page</Link>
        </div>
    )
}