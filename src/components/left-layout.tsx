'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDownIcon, ChevronRightIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { Topic } from "@/app/types/types"
import { usePathname } from "next/navigation"
export default function LeftLayout({ lists }: { lists: Topic[] }) {
    const pathname = usePathname()
    const [topics, setTopics] = useState<Topic[]>([])
    const [isTopicVisibleInMidScreen, setIsTopicVisibleInMidScreen] = useState(false)
    useEffect(() => {
        setTopics(lists)
    }, [lists])


    const handleShowSubTopic = (id: number | undefined) => {
        const topic = topics.find((topic) => topic?.id === id)
        if (topic) {
            topic.showSubTopic = !topic.showSubTopic
            setTopics([...topics])
        }
    }
    return (
        <>
            <div className="hidden  lg:block lg:flex-1 lg:w-[15vw] h-[92vh] lg:border-r  py-4 px-1 ">
                {
                    topics.length > 0 && topics?.map((topic) => (
                        <div key={topic?.id}>
                            <div onClick={() => handleShowSubTopic(topic?.id)} className="flex items-center justify-between hover:bg-neutral-200 hover:dark:bg-neutral-800 px-2 py-1 rounded font-sm text-ellipsis md:font-medium mb-1 cursor-pointer">
                                <h1 className="">{topic?.title}</h1>
                                {topic?.showSubTopic ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            </div>
                            {
                                topic?.showSubTopic ?
                                    <ul>
                                        {
                                            topic?.subTopic.map((subTopic) => (
                                                <Link key={subTopic?.id} href={subTopic?.url} 
                                                className={`${(pathname === subTopic?.url ? "bg-neutral-200 dark:bg-neutral-800" : "")} flex items-center font-sm px-2 mb-1 py-1 pl-6 rounded  font-light  text-ellipsis hover:bg-neutral-200 hover:dark:bg-neutral-800`}>
                                                    {subTopic?.id}.{subTopic?.title}
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                    : null
                            }

                        </div>
                    ))
                }
            </div>
            <div className="lg:hidden flex items-center justify-between border-b h-[5vh] px-5 ">
                <h1>{isTopicVisibleInMidScreen ? "Hide Topics" : "View Topics"} </h1>
                {
                    isTopicVisibleInMidScreen ? <Cross1Icon
                        onClick={() => setIsTopicVisibleInMidScreen(!isTopicVisibleInMidScreen)}
                        className="cursor-pointer w-6 h-6 hover:text-neutral-200 hover:dark:text-neutral-700"
                    /> : <HamburgerMenuIcon
                        onClick={() => setIsTopicVisibleInMidScreen(!isTopicVisibleInMidScreen)}
                        className="cursor-pointer w-6 h-6 hover:text-neutral-200 hover:dark:text-neutral-700"
                    />
                }


            </div>
            {
                isTopicVisibleInMidScreen ?
                    <div className=" md:block lg:hidden  py-4 px-1 border-b px-5">
                        {
                            topics.length > 0 && topics?.map((topic) => (
                                <div key={topic?.id}>
                                    <div onClick={() => handleShowSubTopic(topic?.id)} className="flex items-center justify-between hover:bg-neutral-200 hover:dark:bg-neutral-800 px-2 py-1 rounded font-sm text-ellipsis md:font-medium mb-1 cursor-pointer">
                                        <h1 className="">{topic?.title}</h1>
                                        {topic?.showSubTopic ? <ChevronDownIcon /> : <ChevronRightIcon />}
                                    </div>
                                    {
                                        topic?.showSubTopic ?
                                            <ul>
                                                {
                                                    topic?.subTopic.map((subTopic) => (
                                                        <Link
                                                            onClick={() => setIsTopicVisibleInMidScreen(!isTopicVisibleInMidScreen)}
                                                            key={subTopic?.id} href={subTopic?.url} 
                                                            className={`${(pathname === subTopic?.url ? "bg-neutral-200 dark:bg-neutral-800" : "")} flex items-center font-sm px-2 mb-1 py-1 pl-6 rounded  font-light  text-ellipsis hover:bg-neutral-200 hover:dark:bg-neutral-800`}>
                                                            {subTopic?.id}.{subTopic?.title}
                                                        </Link>
                                                    ))
                                                }
                                            </ul>
                                            : null
                                    }

                                </div>
                            ))
                        }
                    </div> : null

            }
        </>
    )
}