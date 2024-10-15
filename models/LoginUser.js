import axios from 'axios';


const apiLink = 'https://bsky.social/xrpc/com.atproto.server.createSession';

export async function loginUser(user, pass) {
    try {
        const data = {
            "identifier":user,
            "password":pass
        };

        const request = await axios.post(apiLink, data);

        if (request.data && request.data.accessJwt){
            return request.data;
        }else{
            throw new Error('Token de acesso não encontrado.');
        }
    } catch (error) {
        throw new Error("Erro ao autenticar usuário: "+ error.message);       
    }
    

}