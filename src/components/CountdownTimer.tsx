
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold peace-gradient text-white px-5 py-3 rounded-lg w-full text-center">
          {timeLeft.days}
        </div>
        <div className="text-sm mt-2 text-muted-foreground">DAYS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold peace-gradient text-white px-5 py-3 rounded-lg w-full text-center">
          {timeLeft.hours}
        </div>
        <div className="text-sm mt-2 text-muted-foreground">HOURS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold peace-gradient text-white px-5 py-3 rounded-lg w-full text-center">
          {timeLeft.minutes}
        </div>
        <div className="text-sm mt-2 text-muted-foreground">MINUTES</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold peace-gradient text-white px-5 py-3 rounded-lg w-full text-center">
          {timeLeft.seconds}
        </div>
        <div className="text-sm mt-2 text-muted-foreground">SECONDS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
