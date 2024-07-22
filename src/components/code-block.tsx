
'use client'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"

import { useState } from 'react';
type Block = {
    code: string;
    filename: string;
    language?: string;
    highlightLines?: number[];
}

type CodeBlockProps = {
    blocks: Block[];
    themeMode?: 'light' | 'dark';
}


export default function CodeBlock({ blocks, themeMode = 'dark' }: CodeBlockProps) {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [copied, setCopied] = useState<boolean>(false);
    
    const handleCopy = () => {
        const code = blocks[activeTab]?.code
        setCopied(true)
        navigator.clipboard.writeText(code);
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <code className="w-full">
            <div className="flex justify-between items-center px-4 py-2 bg-neutral-100 dark:bg-black">
                <Tabs defaultValue={blocks?.[0]?.filename} className="w-full">
                    <div className='flex justify-between items-center border-b pb-2'>
                        <TabsList>
                            {blocks?.map((block, idx) => (
                                <TabsTrigger onClick={() => setActiveTab(idx)} key={idx} value={block?.filename}>{block?.filename}</TabsTrigger>
                            ))}
                        </TabsList>
                        <Button variant="outline" size="icon">
                            {copied ? <CheckIcon color='green' className="w-4 h-4 cursor-pointer" /> : <CopyIcon onClick={handleCopy} className="w-4 h-4 cursor-pointer" />}
                        </Button>
                    </div>

                    {
                        blocks?.map((block, idx) => (
                            <TabsContent key={idx} value={block?.filename}>
                                <SyntaxHighlighter language={block?.language ? block?.language : 'javascript'}
                                    style={(themeMode === 'light') ? vs : irBlack}
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    lineProps={(lineNumber: number): React.HTMLProps<HTMLElement> => {
                                        const style: React.CSSProperties = { display: "block", width: "100%" };
                                        block?.highlightLines?.map((line) => {
                                            if (line === lineNumber) {
                                                style.backgroundColor = (themeMode === 'light') ? "#e0f0ff" : "#0f2f57"
                                            }
                                        })
                                        return { style };
                                    }}
                                >
                                    {block?.code}
                                </SyntaxHighlighter>
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>

        </code>
    );
}