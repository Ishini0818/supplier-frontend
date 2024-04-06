import React, { useEffect, useState } from 'react';
import TabComponent from '../Header/TabComponent';

const SupplierDashboard = () => {
    const [shop, setShop] = useState('');
    const [item, setItem] = useState('');

    useEffect(() => {
        const storedShop = localStorage.getItem("S-Shop");
        const storedItem = localStorage.getItem("S-Item");
        setShop(storedShop);
        setItem(storedItem);
    }, []);

    return (
        <div>
            <TabComponent/>
            <h1>Customer Dashboard</h1>

            <h2>Select Shop is: {shop}</h2>
            <h2>Select Item is: {item}</h2>
        </div>
    );
};

export default SupplierDashboard;
