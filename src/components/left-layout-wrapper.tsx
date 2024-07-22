import { topicsList } from "@/app/constants/constants";
import { Topic } from "@/app/types/types";
import LeftLayout from "./left-layout";


export default function LeftLayoutWrapper(){
    const topics: Topic[] = topicsList;
    return (
       <LeftLayout lists={topics}/>
    )
}