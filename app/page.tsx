'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = 'https://www.husky.nz';
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-start h-screen text-center px-4 pt-20"> {/* Added pt-20 */}
      <img src="https://serv.husky.nz/logo/default.png" alt="HuskyNZ Logo" className="mb-4 w-32 h-auto" />
      <h1>This website has been deprecated and merged into <a href="https://www.husky.nz" className="text-blue-500 underline">https://www.husky.nz</a></h1>
      <p>Please wait while you are redirected in {countdown} seconds...</p>
    </main>
  );
};

export default Home;