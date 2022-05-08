import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
      signOut(auth);
    };
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#items">Items</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                {user ? (
                  <button
                    className="btn btn-link text-white text-decoration-none"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                ) : (
                  <Nav.Link eventKey={2} as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;