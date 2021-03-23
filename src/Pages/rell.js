import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
  fluid,
  Row,
} from "react-bootstrap";

const Rell = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Codetrain</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>

                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    IT Training
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    IT Consultancy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Contacts</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Rell;
