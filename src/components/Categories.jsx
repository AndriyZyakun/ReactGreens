import React, { useState } from 'react'

export default function Categories({ classNames }) {

    const items = ["vegetables", "fruits", "nuts", "spices"];

    const [activeItem, setActiveItem] = useState(null);

    const onSelectCategory = (index) => {
        setActiveItem(index);
    };

    const menuItems = generateMenuItems(items, onSelectCategory, activeItem);

    return (
        <div className={classNames}>
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectCategory(null)}>all</li>
                {menuItems}
            </ul>
        </div>
    )
}

function generateMenuItems(items, onClickHandler, activeItem) {
    return items.map((name, index) =>
        <li className={activeItem === index ? 'active' : ''}
            onClick={() => onClickHandler(index)}
            key={`${name}_${index}`}>
            {name}
        </li>);
};
