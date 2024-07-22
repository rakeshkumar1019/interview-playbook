'use client'
import { useState } from 'react'
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export default function Code({ snippet = "" }: { snippet: string }) {
    const [copied, setCopied] = useState<boolean>(false)
    const handleCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(snippet);
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }
    return (
        <div className="flex overflow-x-auto justify-between bg-nutral-200 dark:bg-neutral-800 text-sm md:text-lg my-3 text-pretty border rounded-lg  px-2 py-1">
            <pre>
                <code>{snippet}</code>
            </pre>
            <Button onClick={handleCopy} variant='outline' className='rounded-md'>
                {copied ? <CheckIcon color='green' /> : <CopyIcon />}
            </Button>
        </div>
    )
}