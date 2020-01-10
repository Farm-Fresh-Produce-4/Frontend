import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const FNavBar = props => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#1F2A4C' }} light expand='md'>
        <NavbarBrand style={{ color: 'white' }} href='/'>
          Farm Fresh
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink style={{ color: 'white' }} class='navitem' href='/'>
              Shop
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white' }} href='/'>
              Farms
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: 'white' }} href='/'>
              Account
            </NavLink>
          </NavItem>
        </Nav>
        <button
          style={{
            backgroundColor: '#7FAECC',
            borderRadius: '10px',
            border: 'none',
            color: 'white'
          }}
        >
          Click Here To Sell{' '}
        </button>
      </Navbar>
    </div>
  );
};

export default FNavBar;
