'use client'
import { useEffect, useState } from 'react';

export default function TimePage() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, []);
  if (time === null) return null; 
  return (
    <div>
      <h1>Current Time:</h1>
      <p>{time.toString()}</p>
    </div>
  );
}