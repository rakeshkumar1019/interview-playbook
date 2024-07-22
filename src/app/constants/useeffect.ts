const javascriptUseEffect:string=`import React, { useState, useEffect } from 'react';

const UseEffectComponent = () =>  {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after the component mounts and whenever 'count' changes
    console.log('Effect runs: Count is', count);

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup: Count was', count);
    };
  }, [count]); // Effect runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectComponent;`

const tyescriptUseEffect:string=`import React, { useState, useEffect } from 'react';

const UseEffectComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // This code runs after the component mounts and whenever 'count' changes
    console.log('Effect runs: Count is', count);

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup: Count was', count);
    };
  }, [count]); // Effect runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectComponent;`

export const useEffectCodes = [
    {
        code: tyescriptUseEffect,
        filename: "App.tsx",
        language: "typescript",
        highlightLines: [1,6,11,14],
    },
    {
        code: javascriptUseEffect,
        filename: "App.jsx",
        language: "javascript",
        highlightLines: [1,6,11,14],
    },
  ]

const tyescriptFetchData = `import React, { useState, useEffect } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means this effect runs only once, like componentDidMount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;`

const javascriptFetchData = `import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means this effect runs only once, like componentDidMount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;`

export const fetchDataCode = [
  {
      code: tyescriptFetchData,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [1,14,17],
  },
  {
      code: javascriptFetchData,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [1,7,10],
  },
]

const typescriptTimer =`import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (running) {
      setLogs(prevLogs => [...prevLogs, 'useEffect started']);
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
        setLogs(prevLogs => [...prevLogs, 'clearInterval called']);
      }
    };
  }, [running]); // Effect runs when 'running' changes

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <button onClick={startTimer} disabled={running}>Start</button>
      <button className='ml-2' onClick={stopTimer} disabled={!running}>Stop</button>
      <div>
        <h3>Logs:</h3>
        <span> {logs.map((log, index) => ( <div key={index}>{log}</div> ))} </span>
      </div>
    </div>
  );
}

export default Timer;`

const javascriptTimer =`import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      setLogs(prevLogs => [...prevLogs, 'useEffect started']);
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
        setLogs(prevLogs => [...prevLogs, 'clearInterval called']);
      }
    };
  }, [running]); // Effect runs when 'running' changes

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <button onClick={startTimer} disabled={running}>Start</button>
      <button onClick={stopTimer} disabled={!running}>Stop</button>
      <div>
        <h3>Logs:</h3>
        <span> {logs.map((log, index) => ( <div key={index}>{log}</div> ))} </span>
      </div>
    </div>
  );
}

export default Timer;`

export const timerCodes = [
  {
      code: typescriptTimer,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [1,10,15,18,21],
  },
  {
      code: javascriptTimer,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [1,10,15,18,21],
  },
]


const typescriptEventListener = `import React, { useState, useEffect } from 'react';

const WindowSize: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array means this effect runs once, like componentDidMount

  return <div>Window Size: {windowSize}px</div>;
};

export default WindowSize;`

const javascriptEventListener = `import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array means this effect runs once, like componentDidMount

  return <div>Window Size: {windowSize}px</div>;
};

export default WindowSize;`

export const eventListenerCodes = [
  {
      code: typescriptEventListener,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [1,6,12],
  },
  {
      code: javascriptEventListener,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [1,6,12],
  },
]


const typescriptPersistentCounter =`import React, { useState, useEffect } from 'react';

const PersistentCounter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    // Get initial value from localStorage
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    // Save count to localStorage whenever it changes
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]); // Effect runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PersistentCounter;`
const javascriptPersistentCounter=`import React, { useState, useEffect } from 'react';

const PersistentCounter = () => {
  const [count, setCount] = useState(() => {
    // Get initial value from localStorage
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    // Save count to localStorage whenever it changes
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]); // Effect runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PersistentCounter;`

export const persistentCounterCodes = [
  {
      code: typescriptPersistentCounter,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [1,4,6,7,12],
  },
  {
      code: javascriptPersistentCounter,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [1,4,6,7,12],
  },
]


const typescriptEmailValidation=`import React, { useState, useEffect } from 'react';

const EmailValidator: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null); 
  // null for no validation yet

  useEffect(() => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);

    // Update validity status
    setIsValid(valid);
  }, [email]); // Effect runs whenever email changes

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <div>
        <p>Status: 
        {isValid === null ? 'Not validated' : isValid ? 'Valid email' : 'Invalid email'}
        </p>
      </div>
    </div>
  );
};

export default EmailValidator;`

const javascriptEmailValidation=`import React, { useState, useEffect } from 'react';

const EmailValidator: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null); 
  // null for no validation yet

  useEffect(() => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);

    // Update validity status
    setIsValid(valid);
  }, [email]); // Effect runs whenever email changes

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <div>
        <p>Status: 
        {isValid === null ? 'Not validated' : isValid ? 'Valid email' : 'Invalid email'}
        </p>
      </div>
    </div>
  );
};

export default EmailValidator;`



export const emailValidatorCodes = [
  {
      code: typescriptEmailValidation,
      filename: "App.tsx",
      language: "typescript",
      highlightLines: [],
  },
  {
      code: javascriptEmailValidation,
      filename: "App.jsx",
      language: "javascript",
      highlightLines: [],
  },
]