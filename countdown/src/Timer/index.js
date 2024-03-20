import React, { useEffect, useState } from 'react'

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpire }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time - 1000);
        }, 1000);

        if (time <= 0) {
            onExpire && onExpire();
            clearTimeout(timerId);
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [time, onExpire]);


    const getFormattedTime = () => {
        const days = Math.floor(time / DAY);
        const hours = Math.floor((time % DAY) / HOUR);
        const minutes = Math.floor((time % HOUR) / MINUTE);
        const seconds = Math.floor((time % MINUTE) / SECOND);

        return `${days}days  ${hours}hours ${minutes}minutes ${seconds}seconds`;
    };

    return getFormattedTime(time);
};

Timer.defaultProps = {
    duration: 60 * 1000,
}

export default Timer