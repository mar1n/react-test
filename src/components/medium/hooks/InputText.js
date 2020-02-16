import React, { useState} from 'react';

export default function InputText(props) {
    const [value, setValue] = useState(props.defaultText);
    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <label>
                {
                    `The typed text is: ${value}`
                }
            </label>
        </div>
    );
}