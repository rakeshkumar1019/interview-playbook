import Code from "@/components/code"
import CodeBlock from "@/components/code-block"
import { Badge } from "@/components/ui/badge"
import { useStateCodes } from "../../constants/usestate"
import Browser from "@/components/browser"
import Count from "@/components/examples/count"
import QuestionCode from "@/components/question-code"
import { updateStateWithOutPreviousState, updateStateWithPreviousState } from "../../constants/usestate"
export default function ReactUseState() {
    return (
        <div className="pt-5 pb-20 px-20 text-pretty overflow-auto">
            <h1 className="text-xl md:text-4xl lg:text-9xl font-bold border-b">useState Hook</h1>
            <div className="text-sm md:text-lg my-5">The
                <Badge className="mx-1" >useState</Badge>
                Hook allows you to have state variable in a functional component.
            </div>
            <Code snippet="const [count, setCount] = useState(initialState)" />
            <ol className="list-inside list-decimal my-5 ">
                <li className="m-2"><Badge className="mx-1" variant="secondary">count</Badge>: Holds the current state value.</li>
                <li className="m-2"><Badge className="mx-1" variant="secondary">setCount</Badge>: Updates the state value and triggers a re-render.</li>
                <li className="m-2"> <Badge className="mx-1" variant="secondary">initialState</Badge>: The initial value of the state variable.</li>
            </ol>
            <div className="flex flex-col gap-1 md:flex-row my-10">
                <div className="flex-1">
                    <CodeBlock blocks={useStateCodes} />
                </div>
                <div className="flex-1 p-2">
                    <Browser name="React useState Hook">
                        <Count />
                    </Browser>
                </div>
            </div>
            <h3 className="text-md md:text-xl font-bold my-5">Step-by-Step Explanation</h3>
            <ol className="list-inside my-5 ">
                <li className="m-2"><Badge className="mx-1" variant='outline'>1</Badge>: Import <Badge className="mx-1" variant="secondary">useState</Badge> from the react package.</li>
                <li className="m-2"><Badge className="mx-1" variant="outline">4</Badge>: Call <Badge className="mx-1" variant="secondary">useState</Badge> inside your functional component to initialize a state variable. </li>
                <li className="m-2"> <Badge className="mx-1" variant="outline">7</Badge>: Update the state using <Badge className="mx-1" variant="secondary">setCount</Badge> function.</li>
                <li className="m-2"> <Badge className="mx-1" variant="outline">12</Badge>: Use the state variable <Badge className="mx-1" variant="secondary">count</Badge> in the component.</li>
            </ol>
            <h2 className="text-md md:text-2xl font-bold my-6 border-b">How to Correctly Update State Based on Previous State</h2>
            <div className="text-sm md:text-lg flex flex-col gap-3 my-5">
                <div>
                    When updating state based on the previous state, using the current state value directly in the setter function can cause unexpected results due to the asynchronous nature of state updates and React
                    <Badge className="mx-1" variant="secondary">batching process</Badge>.
                </div>
                <div>For example, if the initial <Badge className="mx-1" variant="secondary">count</Badge> is <Badge className="mx-1" variant="secondary">10</Badge> and you call <Badge className="mx-1" variant="secondary">setCount(count + 1)</Badge> three times in a row:</div>
            </div>
            <Code snippet={updateStateWithOutPreviousState} />
            <div className="text-sm md:text-lg flex flex-col gap-3 my-5">
                <div>
                    The <Badge className="mx-1" variant="secondary">count</Badge> will only be <Badge className="mx-1" variant="secondary">11</Badge> instead of <Badge className="mx-1" variant="secondary">13</Badge>. This happens because the state update does not take effect immediately, and each <Badge className="mx-1" variant="secondary">setCount(count + 1)</Badge> call is based on the stale value of <Badge className="mx-1" variant="secondary">count</Badge>.
                </div>
                <div>To ensure each update uses the latest state, you can pass a function to <Badge className="mx-1" variant="secondary">setCount</Badge> that receives the previous state:</div>
            </div>
            <Code snippet={updateStateWithPreviousState} />

            <h2 className="text-md md:text-2xl font-bold my-5 border-b">Interview Question & Answer</h2>
            <QuestionCode />
        </div>
    )
}