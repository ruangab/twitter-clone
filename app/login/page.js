"use client";

import { useRouter } from 'next/navigation';
import LoginForm from '@/views/Login/loginForm';
import { handleLogin } from '@/controllers/authController';

export default function CustomPage() {
    const router = useRouter();

    return (
        <div className="bg-black h-screen grid place-items-center">
            <div>
                <LoginForm onSubmit={(e) => handleLogin(e, router)}></LoginForm>
            </div>
        </div>  
    );
}
