import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Welcome = styled.h1`
  font-size: 4rem;
  padding-top: 3%;
  padding-bottom: 1%;
  margin: 0 auto;
  color: white;
  text-shadow: 4px 4px 1px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

const Container = styled.div`
  background: #1f2a4c;
  width: 30%;
  height: 17em;
  border: solid black 1px;
  border-radius: 20px;
  margin-top: 10%;
  box-shadow: 10px 10px 5px black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  background: #7faecc;
  border-radius: 20px;
  height: 5em;
  width: 20em;
  margin-top: 5%;
  border: solid black 2px;
  font-weight: bold;
  font-size: 1.2em;
  :hover {
    background: #639bbf;
    cursor: pointer;
    box-shadow: 3px 3px 3px black;
  }
`;

const FarmerHomePage = () => {
  return (
    <div>
      <Welcome>Please Choose An Option</Welcome>
      <Holder>
        <Container>
          <Link to='/fprofile'>
            <Button>Create Farm</Button>
          </Link>
        </Container>
        <Container>
          <Link to='/farmer'>
            <Button>Add/Edit Inventory</Button>
          </Link>
        </Container>
      </Holder>
    </div>
  );
};

export default FarmerHomePage;
