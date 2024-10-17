import axios from 'axios';

export async function getUserFeeds(){
    try {
        const accessToken = localStorage.getItem("accessToken");
        const request = await axios({
            method:"get",
            url:"https://lionsmane.us-east.host.bsky.network/xrpc/app.bsky.feed.getFeed?feed=at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot&limit=30",
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })

        if (request.data && request.data.feed){
            return request.data.feed;
        }else{
            throw new Error('Token de acesso não encontrado.');
        }

    } catch (error) {
        throw new Error("Erro ao autenticar usuário: "+ error.message);       

    }
}