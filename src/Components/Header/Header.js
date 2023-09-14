import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown

} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";





export default function Header() {
  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            loading="lazy"
            src="images/logo-orkideh-w-01.png"
            className="logo_brand"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="item_link" to="/home">
                صفحه اصلی
              </Link>
              <Link className="item_link" to="/gallery">
                گالری
              </Link>
              <Link className="item_link" to="/menus">
                منوی غذا
              </Link>
              <Link className="item_link" to="/marasem">
                شرح مراسم
              </Link>
              <Link className="item_link" to="/still">
                ثبت مهارت
              </Link>
              {/* <NavDropdown
                className="Drop_down"
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <a href="#action3">Action</a>
                <a href="#action4">Another action</a>
                <NavDropdown.Divider />
                <a href="#action5">Something else here</a>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex mt-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
