import React, { useState } from "react";
import { connect } from "react-redux";
import { addFarm } from "../../actions";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Form, FormGroup, Label } from "reactstrap";

const FarmerProfile = props => {
  const [newFarm, setnewFarm] = useState({
    id: Date.now(),
    name: "",
    address: "",
    year_founded: "",
    bio: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addFarm();
    props.history.push("/farms");
  };

  const handleChange = e => {
    e.preventDefault();
    setnewFarm({ ...newFarm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name: </Label>
          <br />
          <input
            name="name"
            id="name"
            type="text"
            value={newFarm.name}
            placeholder="Farm Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address: </Label>
          <br />
          <input
            name="address"
            id="address"
            type="text"
            value={newFarm.address}
            placeholder="Enter Farm Address"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="year_founded">Year Founded: </Label>
          <br />
          <input
            label="year founded"
            name="year_founded"
            id="year_founded"
            type="text"
            value={newFarm.year_founded}
            placeholder="Enter Year Founded"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Short Bio: </Label>
          <br />
          <input
            name="bio"
            id="bio"
            type="textarea"
            value={newFarm.bio}
            placeholder="Short Bio Here"
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Add Farm
        </Button>
      </Form>
      <br />
      <br />

      <h4>Already Have A Farm Listed</h4>
      <h5>Click Here To Add/Edit Inventory</h5>
      <Link to="/farmer">
        <Button color="secondary">Edit Inventory</Button>
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
