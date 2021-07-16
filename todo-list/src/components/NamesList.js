import React from 'react'
import DATA from '../data/MOCK_DATA.json'

const NamesList = (props) =>
{
    return(
        <div>
            <h5>First Name</h5>
            {DATA.filter(DATA => DATA.first_name.includes(props.search)).map((val, key) => {
                return (<div className="user" key={key}>
                    
                    <p>
                        {val.first_name}
                    </p>
                </div>);
            })}
        </div>
    )
}

export default NamesList