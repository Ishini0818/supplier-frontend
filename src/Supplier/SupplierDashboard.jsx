import React, { useEffect, useState } from "react";
import TabComponent from "../Header/TabComponent";
import "./SupplierStyle.css";

const SupplierDashboard = () => {
  const [shop, setShop] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const storedShop = localStorage.getItem("S-Shop");
    const storedItem = localStorage.getItem("S-Item");
    setShop(storedShop);
    setItem(storedItem);
  }, []);

  return (
    <>
      <TabComponent />
      <div className="card">
        <h2>Supplier Dashboard</h2>
        <ul>
          <li>Updated Shop : {shop}</li>
          <li>Updated Item : {item}</li>
        </ul>
      </div>
    </>
  );
};

export default SupplierDashboard;
