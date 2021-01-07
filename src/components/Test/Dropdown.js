import React from 'react'

const Dropdown = ({list, addItem}) => {


    return (
    <div>
        { list.map((item, key) => {
            return (
        <div key={key} 
            onClick={() => addItem(item)}>
        <div>
            { item }
        </div>
        </div>
            )
        })}
    </div>
);

};
export default Dropdown