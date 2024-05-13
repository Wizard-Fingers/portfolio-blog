import React, { useState, useEffect } from "react";

const DoodleClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getGreeting = (): string => {
    const hour = time.getHours();
    if (hour >= 6 && hour < 10) {
      return "//Rise and shine, sleepyhead! ☀️";
    } else if (hour >= 10 && hour < 12) {
      return "//Between 10 and 12 is when you get the most work done, right? 💻";
    } else if (hour >= 12 && hour < 14) {
      return "//Lunchtime! Grab a bite and refuel. 🍔";
    } else if (hour >= 14 && hour < 17) {
      return "//Keep grinding, warrior! The day's not over yet. ⚔️";
    } else if (hour >= 17 && hour < 20) {
      return "//Evening, champ! Time to wind down and relax. 🍷";
    } else {
      return "//Bedtime, sleepyhead! Sweet dreams. 🛏️";
    }
  };

  return (
    <div className="flex flex-col justify-end sm:justify-start sm:items-start md:justify-center md:items-center mb-10">
      <p
        className="text-start  text-sm tracking-widest text-brandCol9 dark:to-brandCol10 handwritten-font"
        style={{ whiteSpace: "pre-wrap" }}
      >
        <span className="opacity-80">
          {`import React, { useState, useEffect } from "react"`} <br />
          {`const FunTimeClock: React.FC = () => {`} <br />
          {`  const [time, setTime] = useState<Date>(new Date());`}
          <br />
          {`  useEffect(() => {`} <br />
          {`    const timer = setInterval(() => {`} <br />
          {`      setTime(new Date());`} <br /> {`    }, 1000);`} <br />{" "}
          {`    return () => {`} <br /> {`      clearInterval(timer);`} <br />{" "}
          {`    };`} <br /> {`  }, []);`} <br />
        </span>
        <div className=" font-bold text-xl ">
          {`  return (`} <br /> {`    <div>`} <br />
          <span className="ml-[4rem] text-brandCol5 dark:text-brandCol6 font-bold">
            {getGreeting()}
          </span>{" "}
          <br />{" "}
          <span className="ml-[4rem] text-brandCol5 dark:text-brandCol4">
            {time.toLocaleTimeString()}
          </span>
          <br /> {`    </div>`} <br />
          {`  );`}
        </div>{" "}
        <span className="opacity-80">
          {`};`} <br /> {`export default FunTimeClock;`}
        </span>
      </p>
    </div>
  );
};

export default DoodleClock;
