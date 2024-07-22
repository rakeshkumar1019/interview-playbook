import CodeBlock from "@/components/code-block";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  const javascriptCode: string = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}`
  const tyescriptCode: string = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}`

  const blocks = [
    {
      code: tyescriptCode,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [1, 4, 7, 12],
    },
    {
      code: javascriptCode,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [1, 4, 7, 12],
    }

  ]
  {/* <CodeBlock
blocks={blocks}
themeMode="dark"
/> */}
  return (
    <main>
      <h1>Right</h1>
    </main>
  );
}
