import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        username: null,
        isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Navbar color="inverse" light expand="md">
            <NavbarBrand href="/">{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
