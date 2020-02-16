import React, { useState } from 'react';

export default function SwitchFeature() {
    const [on, setOn] = useState(true)
    return(
        <>
            <label>
                {
                    on
                    ? 'Feature disabled'
                    : 'Feature enabled'
                }
            </label>
            <button onClick={()=> setOn(!on)}>
            </button>
        </>
    )
}