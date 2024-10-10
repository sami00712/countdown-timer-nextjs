import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CountdownTimer : React.FC = () => {
    const [time, setTime] = useState(0);
    const [isRun, setisRun] = useState(false);
    const [remainTime, setRemainTime] = useState(0);
     
    useEffect(() => {
        let timer : NodeJS.Timeout;
        if(isRun && remainTime > 0){
            timer = setInterval(()=> {
                setRemainTime((prev) => prev -1)
            },1000)
        }
        else if(remainTime === 0){
            setisRun(false)
        }
        return () => clearInterval(timer);
    }, [isRun, remainTime])

    const handleStart = () => {
        if (time > 0){
            setisRun(true)
            setRemainTime(time)
        }
    }

    const handlePause = () => {
        setisRun(false)
    }

    const handleReset = () => {
        setisRun(false)
        setRemainTime(0)
        setTime(0)
    }

    return(
        <div className='bg-gradient-to-tr from-white to-black min-h-screen'>
            <Image src={"/logo.png"} alt='logo' width={100} height={100}/>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-blue-400 font-bold'>COUNTDOWN <span className='text-white'>TIMER</span></h1>
                <input type="number" className='border-2 border-blue-400 bg-transparent p-3 mb-6 text-blue-500 text-xl rounded mt-6'
                placeholder='Enter Time in Seconds' value={time > 0 ? time : ""}
                onChange={(e) => setTime(Number(e.target.value))} />
                {remainTime} Seconds Remaining
                <div className='space-x-6 mt-6'>
                    <button onClick={handleStart} className='text-white px-6 py-3 font-bold bg-sky-500 hover:text-blue-400 hover:bg-transparent
                    hover:border-2 border-blue-400'>
                        Start
                    </button>
                    <button onClick={handlePause} className='text-white px-6 py-3 font-bold bg-sky-500 hover:text-blue-400 hover:bg-transparent
                    hover:border-2 border-blue-400 '>
                        Pause
                    </button>
                    <button onClick={handleReset} className='text-white px-6 py-3 font-bold bg-sky-500 hover:text-blue-400 hover:bg-transparent
                    hover:border-2 border-blue-400'>
                        Reset
                    </button>
                </div>
            </div>
            <p className='text-end mt-36 text-sm mr-1 font-mono'>Created by Muhammad Sami.</p>


        </div>
    )


}

export default CountdownTimer