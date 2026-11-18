'use client';

import { useEffect, useState } from 'react';

const format = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());

/** Live clock for Islamabad, so remote teams can see the time difference at a glance. */
export default function LocalTime({ className = '' }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 20_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`tabular-nums ${className}`} suppressHydrationWarning>
      {time ?? '--:--'} PKT
    </span>
  );
}
