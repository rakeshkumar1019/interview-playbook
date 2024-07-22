import Code from "@/components/code"
import CodeBlock from "@/components/code-block"
import { Badge } from "@/components/ui/badge"
import { useEffectCodes, fetchDataCode, timerCodes, eventListenerCodes, persistentCounterCodes, emailValidatorCodes } from "../../constants/useeffect"
import Browser from "@/components/browser"
import CountUseEffect from "@/components/examples/count-useeffect"
import DataFetcher from "@/components/examples/data-fetcher"
import Timer from "@/components/examples/timer"
import EmailValidator from "@/components/examples/email-validator"
export default function ReactUseEffect() {
    return (
        <div className="pt-5 pb-20 px-20 text-pretty overflow-auto">
            <h1 className="text-xl md:text-4xl lg:text-9xl font-bold border-b">useEffect Hook</h1>
            <div className="text-sm md:text-lg my-5">The
                <Badge className="mx-1" >useEffect</Badge>
                hook allows you to perform side effects such as asynchronous tasks in your functional components, such as fetching data, updating the DOM, or subscribing to events.
            </div>
            <Code snippet="useEffect(() => {  perform side effect code here }, [dependencies?]);" />
            <ol className="list-inside list-decimal my-5 ">
                <li className="m-2"><Badge className="mx-1" variant='secondary'>() =&gt; {"{}"}</Badge>: function where you write your side effect code.</li>
                <li className="m-2"><Badge className="mx-1" variant='secondary'>[dependencies?]</Badge>: optional array of dependencies. The effect runs again whenever one of these dependencies changes.If you omit this array, the effect will run after every render.</li>
            </ol>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
                The useEffect hook combines the functionalities of componentDidMount, componentDidUpdate and componentWillUnmount from class components into a single API for managing side effects in functional components.
            </blockquote>

            <div className="flex flex-col gap-1 lg:flex-row my-10">
                <div className="flex-1">
                    <CodeBlock blocks={useEffectCodes} />
                </div>
                <div className="flex-1 p-2">
                    <Browser name="React useEffect Hook">
                        <blockquote className="my-6 border-l-2 pl-6 italic">
                            Inspect console to view logs.
                        </blockquote>
                        <CountUseEffect />
                    </Browser>
                </div>
            </div>
            <h2 className="text-md md:text-2xl font-bold my-6 border-b">Execution Process of useEffect</h2>
            <div>
                <ol className="list-inside list-decimal my-5 ">
                    <li className="m-2">Initial Render:
                        <div className=" ml-8 my-3">
                            <ol className="list-inside list-disc my-5 ">
                                <li className="m-2">
                                    When a component first mounts (initial render), the function passed to useEffect is executed. This is where you can perform side effects such as fetching data or setting up subscriptions.
                                </li>

                            </ol>
                        </div>
                    </li>
                    <li className="m-2">Dependency Array:
                        <div className=" ml-8 my-3">
                            <ol className="list-inside list-disc my-5 ">
                                <li className="m-2">
                                    The dependency array controls when the effect should run.
                                </li>
                                <li className="m-2">
                                    Empty Array []: The effect runs only once, after the initial render, similar to componentDidMount.
                                </li>
                                <li className="m-2">
                                    No Array: The effect runs after every render.
                                </li>
                                <li className="m-2">
                                    Array with Dependencies [dep1, dep2]: The effect runs after the initial render and whenever any of the specified dependencies change.
                                </li>

                            </ol>
                        </div>

                    </li>
                    <li className="m-2">Cleanup (Optional):
                        <div className=" ml-8 my-3">
                            <ol className="list-inside list-disc my-5 ">
                                <li className="m-2">
                                    If you return a function from the useEffect callback, this function will be called before the effect runs again or when the component unmounts. This is used for cleanup tasks like clearing timers or unsubscribing from events.
                                </li>

                            </ol>
                        </div>
                    </li>
                </ol>
            </div>

            <h2 className="text-md md:text-2xl font-bold my-6 border-b">Common Use Cases</h2>
            <ol className="list-inside list-decimal my-5 ">
                <li className="m-2">
                    Fetching Data:
                    <div className="flex flex-col gap-1 lg:flex-row my-10">
                        <div className="flex-1">
                            <CodeBlock blocks={fetchDataCode} />
                        </div>
                        <div className="flex-1 p-2">
                            <Browser name="Fetching Data from API">
                                <DataFetcher />
                            </Browser>
                        </div>
                    </div>
                </li>
                <li className="m-2">
                    Form Validation:
                    <div className="flex flex-col gap-1 lg:flex-row my-10">
                        <div className=" max-h-[700px] overflow-y-scroll">
                            <CodeBlock blocks={emailValidatorCodes} />
                        </div>
                        <div className="flex-1 p-2">
                            <Browser name="Email Validator">
                                <EmailValidator />
                            </Browser>
                        </div>
                    </div>
                </li>
                <li className="m-2">
                    Setting Up a Timer:
                    <div className="flex flex-col gap-1 lg:flex-row my-10">
                        <div className=" max-h-[700px] overflow-y-scroll">
                            <CodeBlock blocks={timerCodes} />
                        </div>
                        <div className="flex-1 p-2">
                            <Browser name="Timer with Logs">
                                <blockquote className="my-6 border-l-2 pl-6 italic">
                                    Click Start button to start the timer, Stop to Stop the timer and view the logs.
                                </blockquote>
                                <Timer />
                            </Browser>
                        </div>
                    </div>
                </li>

                <li className="m-2">
                    Event Listeners:
                    <div className="my-10">
                        <CodeBlock blocks={eventListenerCodes} />
                    </div>

                </li>
                <li className="m-2">
                    Local Storage:
                    <div className="my-10">
                        <CodeBlock blocks={persistentCounterCodes} />
                    </div>
                </li>
            </ol>





            {/* <div className="flex flex-col gap-1 md:flex-row my-10">
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
            </ol> */}


        </div>
    )
}