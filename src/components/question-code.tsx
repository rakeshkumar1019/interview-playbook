'use client'
import { CodeIcon,Cross1Icon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { multiTypeFormCodes } from "@/app/constants/usestate"
import CodeBlock from "./code-block"
import { useState } from "react"
export default function QuestionCode() {
    const [showCode, setShowCode] = useState(false)
    return (
        <>
            <div className="p-1  flex justify-between  items-center w-full text-pretty  rounded-lg">
                <p className="text-pretty">1. Implement form using the useState hook with different types of input fields.</p>
                <div onClick={() => setShowCode(!showCode)}>
                    <Button variant='outline'>
                        {showCode ? <Cross1Icon /> : <CodeIcon />}
                    </Button>
                    
                </div>
            </div>
            {
                showCode ? <div className="max-h-[700px] overflow-y-scroll border  rounded-lg my-2">
                    <CodeBlock blocks={multiTypeFormCodes} />
                </div> : null
            }

        </>
    )
}