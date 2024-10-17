import CardTwiterImage from "@/components/Cards/CardTwitterImage";
import CreateTwitter from "@/components/Cards/CreateTwitter";
import { handleFeed } from "@/controllers/feedController";
import { useEffect, useState } from "react";


export default function FeedView() {
    const [dataFeed, setDataFeed] = useState(null);
    useEffect(() => {
        const feedFunction = async () => {
            const request = await handleFeed();
            console.log(request);
            const listCards = request.map(r => 
            
                <><CardTwiterImage post={r.post} key={1}></CardTwiterImage></>
            );
            setDataFeed(listCards);
        }
        feedFunction();
    }, []);

    return (
        <>
            {dataFeed}
        </>
    );


}