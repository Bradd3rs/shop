import React from 'react'

const BuyItem = ({ handleBuyItem, stock }) => (
    
    <ul>
        {stock.map((item, i) => (
            <li key={i}>
                {item.name}: {item.amount} <button onClick={() => handleBuyItem(item.id)}>Buy (${item.cost})</button>
            </li>
            )
        )}
    </ul>
);

export default BuyItem;
