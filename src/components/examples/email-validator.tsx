'use client'
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';

const EmailValidator: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null); 

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    setIsValid(valid);
  }, [email]); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <div>
        <p>Status: {isValid === null ? 'Not validated' : isValid ? 'Valid email' : 'Invalid email'}</p>
      </div>
    </div>
  );
};

export default EmailValidator;
