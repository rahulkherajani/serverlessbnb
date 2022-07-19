import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../Assets/logo.svg";
import { useNavigate } from "react-router-dom";
import useAuthHook from "../Hooks/useAuth";
import { logoutUser } from "../Services/AuthService";

const Header = () => {
  const { isAuthenticated } = useAuthHook();

  const navigate = useNavigate();
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <ReactLogo style={{ width: "20vw", height: "10vh" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/rooms")}>Rooms</Nav.Link>
            <Nav.Link onClick={() => navigate("/meals")}>Meals</Nav.Link>
            <Nav.Link onClick={() => navigate("/tours")}>Tours</Nav.Link>
            <Nav.Link onClick={() => navigate("/review")}>Review</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <Nav.Link onClick={() => logoutUser()}>Log Out</Nav.Link>
            ) : (
              <>
                <Nav.Link onClick={() => navigate("/register")}>
                  Register
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
