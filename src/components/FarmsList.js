import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FarmsList = () => {
  // const [farms, setFarms] = useState('')

  useEffect(() => {
    axiosWithAuth()
      .get('/placeholder')
      .then(res => {
        setFarms(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default FarmsList;
