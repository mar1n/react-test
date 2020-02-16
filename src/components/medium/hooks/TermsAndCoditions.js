import React, { useState } from 'react';

export default function TermsAndCoditions() {
    const [terms, setTerms] = useState(false);
    const [conditions, setConditions] = useState(false);
    return (
        <div>
            <label>
            {
                (terms && conditions)
                ? 'Terms and Coditions accepted'
                : terms
                ? 'Terms accepted'
                : conditions
                ? 'Coditions accepted'
                : 'Nothing Accepeted yet'
            }
            </label>
            <button
                className='terms'
                onClick={() => setTerms(!terms)}
                >
            </button>
            <button
                className='conditions'
                onClick={() => setConditions(!conditions)}
                >
            </button>
        </div>
    )
}