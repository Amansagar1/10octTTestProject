import React, { useState, useEffect } from 'react';
import './Supplier.css';

const SupplierItemForm = () => {
  const [showItemForm, setShowItemForm] = useState(true);
  const [showSupplierForm, setShowSupplierForm] = useState(true);
  const [formData, setFormData] = useState({
    itemDetails: {
      itemName: '',
      quantity: '',
      unitPrice: '',
      submissionDate: ''
    },
    supplier: {
      supplierName: '',
      companyName: '',
      country: '',
      state: '',
      city: '',
      email: '',
      phoneNumber: ''
    }
  });

  const [submittedData] = useState([
    {
      supplier: 'Charles Wang',
      itemName: 'White Wine',
      quantity: '12',
      city: 'Cape Town',
      country: 'South Africa',
      email: 'charles.w@wine-experts.com',
      phone: '+0860 591 0120'
    },
    {
        supplier: 'Charles Wang',
        itemName: 'White Wine',
        quantity: '12',
        city: 'Cape Town',
        country: 'South Africa',
        email: 'charles.w@wine-experts.com',
        phone: '+0860 591 0120'
      },
    
      {
        supplier: 'Charles Wang',
        itemName: 'White Wine',
        quantity: '12',
        city: 'Cape Town',
        country: 'South Africa',
        email: 'charles.w@wine-experts.com',
        phone: '+0860 591 0120'
      },
      
    
  ]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="form-container">
       <div className="form-section">
        <div className="section-header">
          <h2>Item Details</h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              value={formData.itemDetails.itemName}
              onChange={(e) => handleInputChange('itemDetails', 'itemName', e.target.value)}
              className="form-input"
              maxLength={225}
            />
            <span className="helper-text">Max 225 characters</span>
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="integer"
              placeholder="Enter quantity"
              value={formData.itemDetails.quantity}
              onChange={(e) => handleInputChange('itemDetails', 'quantity', e.target.value)}
              className="form-input"
              maxLength={10}
              
            />
            <span className="helper-text">Numbers only</span>
          </div>
          <div className="form-group">
            <label>Unit Price</label>
            <input
              type="text"
              placeholder="Enter unit price"
              value={formData.itemDetails.unitPrice}
              onChange={(e) => handleInputChange('itemDetails', 'unitPrice', e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Date of Submission</label>
            <input
              type="date"
              value={formData.itemDetails.submissionDate}
              onChange={(e) => handleInputChange('itemDetails', 'submissionDate', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Supplier Details Section */}
      <div className="form-section">
        <div className="section-header">
          <h2>Supplier Details</h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Supplier Name</label>
            <input
              type="text"
              placeholder="Enter supplier name"
              value={formData.supplier.supplierName}
              onChange={(e) => handleInputChange('supplier', 'supplierName', e.target.value)}
              className="form-input"
            />
            <span className="helper-text">Max 50 characters</span>
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              value={formData.supplier.companyName}
              onChange={(e) => handleInputChange('supplier', 'companyName', e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <select
              value={formData.supplier.country}
              onChange={(e) => handleInputChange('supplier', 'country', e.target.value)}
              className="form-select"
            >
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="form-group">
            <label>State</label>
            <select
              value={formData.supplier.state}
              onChange={(e) => handleInputChange('supplier', 'state', e.target.value)}
              className="form-select"
            >
              <option value="">Select state</option>
              <option value="Florida">Florida</option>
              <option value="California">California</option>
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={formData.supplier.city}
              onChange={(e) => handleInputChange('supplier', 'city', e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.supplier.email}
              onChange={(e) => handleInputChange('supplier', 'email', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Submitted Data Section */}
      <div className="submitted-data-section">
        <div className="submitted-header">
          <h2>Submitted Data</h2>
          <p>The data submitted by users will be displayed below.</p>
          <button className="save-changes-btn">Save Changes</button>
        </div>
        <div className="table-container">
          <div className="table-header">
            <h3>Uploaded Data</h3>
            <button className="clear-all-btn">Clear All</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                  Supplier
                </th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>City</th>
                <th>Country</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                    {item.supplier}
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierItemForm;