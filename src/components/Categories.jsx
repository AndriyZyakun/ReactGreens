import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../redux/reducers/categoryFilter';

export default function Categories({ classNames }) {

    const activeItem = useSelector(({ categorySlice }) => categorySlice.activeCategory);

    const dispatch = useDispatch();

    const onSelectCategory = (index) => {
        dispatch(selectCategory(index))
    };

    const menuItems = generateMenuItems(activeItem, onSelectCategory);

    const captionAll = 'all';

    return (
        <div className={classNames}>
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectCategory(null)}>{captionAll}</li>
                {menuItems}
            </ul>
        </div>
    )
}

function generateMenuItems(activeItem, onClickHandler) {

    const items = ["vegetables", "fruits", "nuts", "spices"];

    return items.map((name, index) =>
        <li className={activeItem === index ? 'active' : ''}
            onClick={() => onClickHandler(index)}
            key={`${name}_${index}`}>
            {name}
        </li>);
};
