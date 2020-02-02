import React from 'react';

export default function FruitSelect(props) {
    return (
        <div>
            <select value={props.selected}>
                <option>Apple</option>
                <option>Orange</option>
            </select>
        </div>
    )
} 