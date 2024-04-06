import React, { useEffect, useState } from "react";
import "./CustomerStyle.css";
import TabComponent from "../Header/TabComponent";

const CustomerDashboard = () => {
  const [shop, setShop] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const storedShop = localStorage.getItem("C-Shop");
    const storedItem = localStorage.getItem("C-Item");
    setShop(storedShop);
    setItem(storedItem);
  }, []);

  return (
    <>
      <TabComponent />
      <div className="card">
        <h2>Customer Dashboard</h2>
        <ul>
          <li>Subscribed Shop : {shop}</li>
          <li>Subscribed Item : {item}</li>
        </ul>
      </div>
    </>
  );
};

export default CustomerDashboard;
