// this is the info page ONLY. found at /info
export default function Info() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="relative z-10 w-1/2 items-center justify-center">
                <div className="flex flex-col w-1/2 items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl-dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    {/* each h1 under a new div gives a new overall section on the info page */}
                    <h1 className="text-2xl font-bold text-red-100">Welcome to the Perennial!</h1>
                    {/* there should be only one (1) ul per div on the info page to create separation of each section on the page for the end user */}
                    <ul className="list-disc mx-8 my-6">
                        <li>The Perennial is a <span className="font-bold">4 vs 4 international osu! Standard</span> tournament with <span className="font-bold">no restrictions on rank</span> and <span className="font-bold">6 to 8 players per team</span>.</li>
                        {/* repeat li elements as needed for each section */}
                    </ul>
                </div>
            </div>
        </main>
    )
}