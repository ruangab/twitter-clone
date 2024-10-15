import axios from 'axios';

export async function getUser(){
    try {
        const accessToken = localStorage.getItem("accessToken");
        const user = localStorage.getItem("handle");
        const request = await axios({
            method:"get",
            url:`https://bsky.social/xrpc/app.bsky.actor.getProfile?actor=${user}`,
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })

        if (request.data){
            return request.data;
        }


    } catch (error) {
        throw new Error("Erro ao autenticar usuário: "+ error.message);       

    }
}