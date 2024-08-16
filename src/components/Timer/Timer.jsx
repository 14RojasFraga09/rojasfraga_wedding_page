import React, { useEffect, useState } from "react";
import strings from "../../strings/timer.json";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isPast} from "date-fns";
import { wreath } from "../../assets/images/countdown.png"

const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(strings.date);

    if (isPast(strings.date)) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    } else{
        return {
            days: differenceInDays(target, now),
            hours: differenceInHours(target, now) % 24,
            minutes: differenceInMinutes(target, now) % 60,
            seconds: differenceInSeconds(target, now) % 60,
        };
    }
  };

  const TimerNumber = ({number}) => {
    return (
        <span className="text-3xl lg:text-4xl text-pia-blue-900">{number}</span>
    )
  }

  const TimerTag = ({tag}) => {
    return (
        <span className={`text-base lg:text-lg text-shadows items-center ${Boolean(strings.is_text_uppercase) && "uppercase"}`}>{tag}</span>
    )
  }

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => { 
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return(
        <div className="w-full flex justify-center items-center relative">
            <div className="bg-neutral-cream-300 h-[300px] w-[300px] 2xl:h-[350px] 2xl:w-[350px] rounded-full flex flex-col justify-center items-center">
                <p className="text-5xl lg:text-6xl font-serif font-bold pb-6">{strings.title}</p>
                <div className="grid grid-rows-2 grid-cols-[repeat(4,_60px)] bg-jacarta-100 gap-x-px
                [&>span]:flex [&>span]:justify-center [&>span]:px-2 [&>span]:bg-neutral-cream-300">
                    <TimerNumber number={timeLeft.days}/>
                    <TimerNumber number={timeLeft.hours}/>
                    <TimerNumber number={timeLeft.minutes}/>
                    <TimerNumber number={timeLeft.seconds}/>

                    <TimerTag tag={strings.days}/>
                    <TimerTag tag={strings.hours}/>
                    <TimerTag tag={strings.minutes}/>
                    <TimerTag tag={strings.seconds}/>
                </div>
            </div>
            <div className="absolute  w-full flex justify-center items-center h-[300px] lg:h-[350px] overflow-visible">
                <img className="h-[390px] w-[390px] 2xl:h-[440px] 2xl:w-[440px] rotate-[60deg]" src={wreath} alt="Wreath of lavander and eucalyptus flowers" role="presentation" />
            </div>
        </div>
    )
}

export default Timer;