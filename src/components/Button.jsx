import React from 'react';

export default function Button({ classNames, children }) {
    return (
        <button className={classNames}>{children}</button>
    )
};
