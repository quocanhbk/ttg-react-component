import React, { useState } from 'react';
import Dropdown from './Dropdown';


const MultiSelect = () => {
    // state showing if dropdown is open or closed
    const [dropdown, setDropdown] = useState(false);
    // managing dropdown items (list of dropdown items)
    const [items, setItems] = useState(['john', 'milos', 'steph', 'kathreine']);
    // contains selected items
    const [selectedItems, setSelected] = useState([]);


    const toogleDropdown = () => {
        setDropdown(!dropdown)
    };
    // adds new item to multiselect 
    const addTag = (item) => {
        setSelected(selectedItems.concat(item));
        setDropdown(false);
    };
    // removes item from multiselect
    const removeTag = (item) => {
        const filtered = selectedItems.filter((e) => e !== item);
        setSelected(filtered);
    }

    return (
    <div>
        <div>
            <div>
                {
                    selectedItems.map((tag, index) => {
                        return (
                            <div key={index}>
                                <div>{ tag }</div>
                                <div>
                                    <div onClick={() => removeTag(tag)}>
                                        <button></button>
                                    </div>
                                </div>
                            </div>)
                    })
                }
                <div>
                    <input onClick={toogleDropdown}/>
                </div>
            </div>
        </div>
        { dropdown  ? <Dropdown list={items} addItem={addTag}></Dropdown>: null }
    </div>
        )
};
export default MultiSelect