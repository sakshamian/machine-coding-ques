import React, { useState } from 'react'
import Timer from '.';

const Timerwrapper = ({ duration, onExpire }) => {
    const [expired, setExpired] = useState(false);

    const onExpireHelper = () => {
        onExpire && onExpire();
        setExpired(true);
    };

    const handleClick = () => {
        setExpired(false);
    };

    return (
        !expired ?
            <Timer duration={duration} onExpire={onExpireHelper} /> : <button onClick={handleClick}>Restart</button>
    )
}

export default Timerwrapper