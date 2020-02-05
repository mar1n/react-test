import React from 'react';

export default class F1Drivers extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <>
                {
                    this.props.list.map( driver => 
                            <div className='driver' key={driver.name}>
                                <div className='name' key={driver.name}>
                                    {driver.name}
                                </div>
                                <div className='positions' key={driver.positions}>
                                    {
                                        Object.keys(driver.positions)
                                        .map(year => (
                                            `${year}: ${driver.positions[year]}`
                                        )).join(', ')
                                    }
                                </div>
                            </div>
                    )
                }
            </>
        )
    }
}