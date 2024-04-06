import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import CustomerDashboard from './Customer/CustomerDashboard';
import CustomerForm from './Customer/CustomerForm';
import SupplierDashboard from './Supplier/SupplierDashboard';
import SupplierForm from './Supplier/SupplierForm';
import TabComponent from './Header/TabComponent';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<TabComponent />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/customer-form" element={<CustomerForm/>} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
          <Route path="/supplier-form" element={<SupplierForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
