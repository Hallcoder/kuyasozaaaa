import { useEffect, useRef, useState } from 'react';
import moment from 'moment-timezone';
import Confetti from 'react-confetti';
import audioAsset from "./assets/finally.mp3";
const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const calculateTimeLeft = () => {
    const targetDate = moment.tz('2024-08-02 11:40', 'Europe/Berlin'); // GMT+2 corresponds to Europe/Berlin timezone
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showLargeCountdown, setShowLargeCountdown] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds <= 15) {
        setShowLargeCountdown(true);
      }

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0 && !audioPlayed) {
        audioRef.current!.play();
        setAudioPlayed(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [audioPlayed]);
  

  return (
    <div className="relative overflow-hidden backgroundImage min-h-screen flex flex-col items-center justify-center ">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={30}
        recycle={true}
      />
      {!showLargeCountdown ? (
        <div className="flex flex-col items-center justify-center w-5/12 h-screen ml-[60%] bg-gradient-to-r from-blue-200 via-yellow-300 to-orange-200 text-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-10 rounded-lg shadow-lg text-center">
          <p className="text-2xl my-4">
            <strong className="text-2xl font-bold text-black">{timeLeft.days}</strong> Days <strong className="text-2xl font-bold text-black">{timeLeft.hours}</strong> Hours <strong className="text-2xl font-bold text-black">{timeLeft.minutes}</strong> Minutes {timeLeft.seconds} Seconds
          </p>
          <h1 className="text-4xl font-bold mb-4">Till 11:40 AM Friday August 2nd</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white text-9xl">
          {timeLeft.seconds}
        </div>
      )}
      <audio ref={audioRef} src={audioAsset}></audio>
      <footer className='absolute bottom-2'>
        Made with Love 💖 ~ <a href="https://github.com/Hallcoder" className="border-b border-blue-300 animate-bounce">Zesta</a>
      </footer>
    </div>
  );
};

export default App;
