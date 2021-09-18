

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row >
        <Col xl="6" >
          <div style={{marginLeft:"20px"}} className="copyright text-left text-xl-left text-muted">
            copyright © {" "}
            <a
              className="font-weight-bold ml-1"
              target="_blank"
            >
              iLabs, All Rights Reserved
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                target="_blank"
              >
                 ©Privacy Policy {" "}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                target="_blank"
              >
                Terms of Service
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                target="_blank"
              >
                Help Center
              </NavLink>
            </NavItem>

          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
