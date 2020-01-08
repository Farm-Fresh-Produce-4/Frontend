import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFarm } from '../../actions';
import { Link } from 'react-router-dom';

const FarmerProfile = props => {
  const [newFarm, setnewFarm] = useState({
    name: '',
    address: '',
    year_founded: '',
    bio: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addFarm();
    props.history.push('/farms');
  };

  const handleChange = e => {
    e.preventDefault();
    setnewFarm({ ...newFarm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            label='name'
            name='name'
            type='text'
            value={newFarm.name}
            placeholder='Farm Name'
            onChange={handleChange}
          />
          <input
            label='address'
            name='address'
            type='text'
            value={newFarm.address}
            placeholder='Enter Farm Address'
            onChange={handleChange}
          />
          <input
            label='year founded'
            name='year_founded'
            type='text'
            value={newFarm.year_founded}
            placeholder='Enter Year Founded'
            onChange={handleChange}
          />
          <input
            label='bio'
            name='bio'
            type='text'
            placeholder='Short Bio Here'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Farm</button>
      </form>

      <h2>Already Have A Farm Listed</h2>
      <h3>Click Here To Add/Edit Inventory</h3>
      <Link to='/farmerinventory'>
        <button>Edit Inventory</button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  farms: state.farms,
  error: state.error
});

export default connect(mapStateToProps, { addFarm })(FarmerProfile);
