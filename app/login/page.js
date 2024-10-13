"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CustomPage() {
    const [senha, setSenha] = useState("");
    const [usuario, setUsuario] = useState("");
    const router = useRouter();

    console.log(senha);
    console.log(usuario);

    const login = (e) => {
        e.preventDefault();
    
        if(senha == "123" && usuario == "ruan"){
            router.push("/");
            localStorage.setItem("user", usuario);
        }else{
            alert("login incorreto");
        }
    }
    
    return (
        <div className="bg-black h-screen grid place-items-center">
            <div>
                <form className="" onSubmit={login}>
                    <h1 className="text-center">Login</h1>
                    <span className="mb-2">E-mail</span><br></br>
                    <input type="text" className="text-black" onChange={(e) => setUsuario(e.target.value)}></input><br></br>
                    <span className="mb-2">Senha</span><br></br>
                    <input className="text-black" type="password" onChange={(e) => setSenha(e.target.value)}></input><br></br>
                    <button type="submit" className="mb-2">Cadastrar</button>
                </form>
            </div>
        </div>  
    );
}
