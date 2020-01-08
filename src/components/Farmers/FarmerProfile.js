import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFarm } from '../../actions';
import { Link } from 'react-router-dom';

const FarmerProfile = props => {
  const [newFarm, setnewFarm] = useState({
    name: '',
    address: ''
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          label='name'
          name='name'
          type='text'
          placeholder='Farm Name'
          onChange={handleChange}
        />
        <input
          label='address'
          name='address'
          type='text'
          placeholder='Enter Farm Address'
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Add Farm</button>
      <Link to='/farmerinventory'>
        <button>Edit Inventory</button>
      </Link>
    </form>
  );
};

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  farms: state.farms,
  error: state.error
});

export default connect(mapStateToProps, { addFarm })(FarmerProfile);
