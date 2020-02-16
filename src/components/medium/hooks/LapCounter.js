import React, { useState } from 'react';

export default function LapCounter() {

    const [ lap, setLap] = useState(0);
    return(
        <>
            <label>
                Lap {lap}
            </label>
            <button onClick={()=> setLap(lap+1)}>
            </button>
        </>
    )
}