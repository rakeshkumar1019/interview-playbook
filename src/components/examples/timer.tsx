'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

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
      <Button onClick={startTimer} disabled={running}>Start</Button>
      <Button className='ml-2' onClick={stopTimer} disabled={!running}>Stop</Button>
      <div className='my-2'>
        <h3>Logs:</h3>
        <span>
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </span>
      </div>
    </div>
  );
}

export default Timer;

