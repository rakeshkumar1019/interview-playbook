'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const CountUseEffect: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log('Effect runs: Count is', count);
        return () => {
            console.log('Cleanup: Count was', count);
        };
    }, [count]);

    return (
        <>
            <div className='mt-5'>
                <p>Count: {count}</p>
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
            </div>
        </>
    );
};

export default CountUseEffect;