import React, { useState } from 'react';
import './SupplierStyle.css';
import TabComponent from '../Header/TabComponent';

function SupplierForm() {
    const [shop, setShop] = useState('');
    const [item, setItem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (shop && item) {
            alert(`Selected Shop: ${shop}\nSelected Item: ${item}`);
            localStorage.setItem("S-Shop", shop);
            localStorage.setItem("S-Item", item);
        } else {
            alert('Please select both a shop and an item.');
        }
    };

    return (
        <>
         <TabComponent/>
        <div className="card">
           
            <h1>Shop and Item Selection</h1>
            <form onSubmit={handleSubmit} id='supplier'>
                <select id="shop" value={shop} onChange={(e) => setShop(e.target.value)}>
                    <option value="">Select Shop</option>
                    <option value="Shop A">Shop A</option>
                    <option value="Shop B">Shop B</option>
                    <option value="Shop C">Shop C</option>
                </select>
                <br />
                <select id="item" value={item} onChange={(e) => setItem(e.target.value)}>
                    <option value="">Select Item</option>
                    <option value="Item 1">Item 1</option>
                    <option value="Item 2">Item 2</option>
                    <option value="Item 3">Item 3</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default SupplierForm;
