import React from 'react';

export default function WorldChampions(props) {
    return (
        <div>
            {props.drivers
            .filter(
                driver =>
                driver.isWorldChampion === true
            ).map(
                driver =>
                <label key={driver.name}>{driver.name}</label>
            )}
        </div>
    )
}