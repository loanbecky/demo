import React, { Component } from 'react';
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
    DropdownItem } from 'reactstrap';
    
class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
      return (
        <div className="App">
          <Navbar color="light" light expand="md" style={{paddingRight: '100px'}}>
          
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Wallets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Blocks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Transaction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Adresses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Assets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contracts</NavLink>
              </NavItem>
            </Nav>
         
        </Navbar>
        
        </div>
      );
    }
  }
  
  export default NavBar;

  // nhu cua ah la them 6 cai the a
  // navbar: chinh color ="light" thay bang cai khac vi du color='dark' =>> search: navbar bootstrap color
  // navbar: chinh padding, margin trong style
  
