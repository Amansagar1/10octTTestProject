import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import SupplierItemForm from './Components/SupplierForm';

function App() {
  const [showItemForm, setShowItemForm] = useState(false);
  const [showSupplierForm, setShowSupplierForm] = useState(false);

  const handleCheckboxChange = (e) => {
    if (e.target.name === "item") {
      setShowItemForm(e.target.checked);
    } else if (e.target.name === "supplier") {
      setShowSupplierForm(e.target.checked);
    }
  };

  return (
    <div className="">
         <Navbar />
      <div className='MAinpage'>
     
        <div className="checkbox_main">
          <input
            type='checkbox'
            name='item'
            checked={showItemForm}
            onChange={handleCheckboxChange}
            className='checkbox'
          />
          <label htmlFor="item">Item</label>
          <input
            type='checkbox'
            name='supplier'
            checked={showSupplierForm}
            onChange={handleCheckboxChange}
            className='checkbox'
          />
          <label htmlFor="supplier">Supplier</label>
        </div>
     
        {showItemForm && <SupplierItemForm isItemForm={true} />}
{showSupplierForm && <SupplierItemForm isItemForm={false} />}

      </div>
    </div>
  );
}

export default App;
