import { 
    AnimeLinkCard 
} from "./cards/animelink-card"

import {
    GHLink
} from "./cards/gh-link"

import {
    BooksCard
} from "./cards/books-card"

import {
    GHStats
} from "./cards/gh-stats"

import {
    StacksCard
} from "./cards/stacks-card"

export const GridCard = () => {
    return (
        <>
            <div className="grid grid-cols-6 gap-3 mt-8">
                {/* First row */}
                <div className="col-span-6 md:col-span-3">
                    <GHLink />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <StacksCard/>
                </div>
                
                {/* Second row */}
                <div className="col-span-2 md:col-span-1">
                    <AnimeLinkCard />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <GHStats />
                </div>
                <div className="col-span-6 md:col-span-3 h-full">
                    <BooksCard />
                </div>
            </div>
        </>
    )
}