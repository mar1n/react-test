import React, { useState } from 'react';

export default function PasswordChecker() {
    const [pwd, setPwd] = useState('');
    const [confirmpwd, setConfirmpwd] = useState('');
    return(
        <>
            <input
                type='password'
                className='pwd'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />
            <input
                type='password'
                className='confirmPwd'
                value={confirmpwd}
                onChange={(e) => setConfirmpwd(e.target.value)}
            />
            <label>
                {
                    pwd === confirmpwd
                    ? 'Passwords match'
                    : 'Passwords do not match'
                }
            </label>
        </>
    )
}