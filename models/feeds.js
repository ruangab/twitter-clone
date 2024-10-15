import axios from 'axios';

export async function getUserFeeds(){
    try {
        const accessToken = localStorage.getItem("accessToken");
        const request = await axios({
            method:"get",
            url:"https://bsky.social/xrpc/app.bsky.feed.getFeedGenerator?feed=at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot",
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