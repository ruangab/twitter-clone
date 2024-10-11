
function CardTrending() {
    return (<>
        {/*first trending tweet*/}
        <div className="flex hover:bg-stone-900">
            <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                    1 . Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                    5,466 Tweets
                </p>
            </div>
            <div className="flex-1 px-4 py-2 m-2">
                <a
                    href=""
                    className=" text-2xl rounded-full text-gray-400 hover:bg-stone-950 hover:text-blue-300 float-right"
                >
                    <svg
                        className="m-2 h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </div>
        </div>
        <hr className="border-gray-600" />
    </>);
}
export default function Trendings() {
    return (
        <>
            <div className="rounded-lg bg-stone-950 shadow-lg">
                <div className="flex">
                    <div className="flex-1 m-2">
                        <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                            Germany trends
                        </h2>
                    </div>
                    <div className="flex-1 px-4 py-2 m-2">
                        <a
                            href=""
                            className=" text-2xl rounded-full text-white hover:bg-stone-950 hover:text-blue-300 float-right"
                        >
                            <svg
                                className="m-2 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600" />
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                <CardTrending></CardTrending>
                
            </div>

        </>
    );
}