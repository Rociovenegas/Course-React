import React, { useState } from 'react';


import "./ItemCounter.css";
import styles from './ItemCounter.module.css';
interface Props {
    productName: string;
    quantity: number | undefined;
}


export const ItemCounter = ({ productName, quantity = 1 }: Props) => {

    const [count, setCount] = useState(10);

    const handleAdd = () => {

        setCount(count + 1);
    }
    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }


    const handleClick = () => {
        return;
    }

    return (
        <section className={styles.itemRow}>
            <span
                className="item-text"
                style={{ color: count === 1 ? 'red' : 'black' }}
            >{productName}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
    )
}
