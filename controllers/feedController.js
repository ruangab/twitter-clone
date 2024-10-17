import { getUserFeeds } from "@/models/Feeds";

export async function handleFeed() {
    try {
        const data = await getUserFeeds();
        
        return data;
    } catch (error) {
        console.error(error.message);        
        return null;
    }

}