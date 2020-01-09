import React from 'react';
import { Link } from 'react-router-dom';

const FarmerHomePage = () => {
  return (
    <div>
      <Link to='/fhome'>
        <button>Create Farm</button>
      </Link>
      <Link to='/fhome'>
        <button>Add/Edit Inventory</button>
      </Link>
    </div>
  );
};

export default FarmerHomePage;
