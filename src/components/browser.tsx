'use client'
import { useState } from "react";
import { StopIcon, Cross1Icon, MinusIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button";
export default function Browser({
    children, name
}: Readonly<{
    children?: React.ReactNode;
    name?: string
}>) {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    return (
        <div className=" h-full border rounded-lg p-2 bg-neutral-100 dark:bg-black">
            <div className="w-full mb-4 p-2 h-[9%] flex  items-center mt-2 border rounded-lg">
                <div className="flex gap-2 w-[10%]">
                    <Cross1Icon className="cursor-pointer" color="red" />
                    <MinusIcon className="cursor-pointer" color="gray" />
                    <StopIcon className="cursor-pointer" color="green" />
                </div>

                <h1 className="w-[85%]  text-sm font-thin text-center">{name ? name : "broswer"}</h1>
                <ReloadIcon className="w-[5%] cursor-pointer hover:text-slate-200 hover:dark:text-slate-700" onClick={handleRefresh} />
            </div>
            <div key={refreshKey}>
                {children}
            </div>
        </div>
    )
}