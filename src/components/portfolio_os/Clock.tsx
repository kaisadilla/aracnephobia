import React, { useEffect, useState } from 'react';
import { DivProps } from 'types';

export interface ClockProps extends DivProps {
    
}

function Clock ({
    ...divProps
}: ClockProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(clock);
    }, [])

    return (
        <div {...divProps}>
            {time.toLocaleTimeString("en-GB", {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })}
        </div>
    );
}

export default Clock;
