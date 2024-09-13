import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';

export default function Home({ products }) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories classNames="categories" />
                <SortPopup />
            </div>
            <h2 className="content__title">All products</h2>
            <div className="content__items">
                {
                    products.map((product) => <PizzaBlock key={product.id} {...product} />)
                }
            </div>
        </div>
    );
}