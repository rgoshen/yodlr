import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

function NavBar() {
  return (
    <div>
      <Navbar color='dark' expand='md' dark>
        <NavbarBrand href='/'>Yodlr</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className='me-auto' navbar></Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
