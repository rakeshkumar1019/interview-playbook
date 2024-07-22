'use client';
import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  const [data, setData] = useState(null);
  const [seconds, setSeconds] = useState(0);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));

    // Set up a timer
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty array means this effect runs once on mount

  return (
    <div>
      <h1>Data Fetching, Timer, and Cleanup Example</h1>
      <div>
        <h2>Data:</h2>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
      <div>
        <h2>Timer:</h2>
        <p>Seconds: {seconds}</p>
      </div>
    </div>
  );
}

export default UseEffectExample;
