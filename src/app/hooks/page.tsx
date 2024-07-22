import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Hooks() {
//   const javascriptCode: string = `import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       You pressed me {count} times
//     </button>
//   );
// }`
//   const tyescriptCode: string = `import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState<number>(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       You pressed me {count} times
//     </button>
//   );
// }`

//   const blocks = [
//     {
//       code: tyescriptCode,
//       filename: "App.tsx",
//       language: "typescript",
//       highlightLines: [1, 4, 7, 12],
//     },
//     {
//       code: javascriptCode,
//       filename: "App.jsx",
//       language: "javascript",
//       highlightLines: [1, 4, 7, 12],
//     }

//   ]
  
  return (
    <main className="h-screen  dark:bg-black">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>

    </main>
  );
}
