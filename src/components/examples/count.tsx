'use client'
import { useState } from "react"
import { Button } from "../ui/button"
export default function Count(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <Button onClick={() => setCount(count + 1)}>You pressed me {count} times</Button>
        </div>
    )

}