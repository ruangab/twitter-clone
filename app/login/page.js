"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

async function authenticate(username, passsword) {
    try {
        const axios = require('axios');

        const json = {
            "identifier":username,
            "password":passsword
        }
        console.log(json);

        const response = await axios.post('https://bsky.social/xrpc/com.atproto.server.createSession', json);
        if (!response.ok) {
            throw new Error(`Erro ao fazer login: ${response.statusText}`);
        }
        const data = await response.json();

        if (data && data.accessJwt) {
            console.log('Login bem-sucedido, token recebido:', data.accessJwt);
            
            // Armazenar o token no localStorage ou cookies
            localStorage.setItem('accessJwt', data.accessJwt);
      
            // Retorne o token ou a resposta completa se precisar
            router.push("/");
          } else {
            router.push("/login");
            throw new Error('Falha na autenticação: Token de acesso não encontrado.');
          }

    } catch (error) {
        console.error('Erro ao autenticar:', error);
    }
}

export default function CustomPage() {
    const [senha, setSenha] = useState("");
    const [usuario, setUsuario] = useState("");
  
    const router = useRouter();

    console.log(senha);
    console.log(usuario);

    const login = (e) => {
        e.preventDefault();
        
        authenticate(usuario, senha);
      
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
