import { Button, Container, Row, Col } from "reactstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFAQ from "../views/AddFAQ";

const Header = () => {
  return (
    <>
    {/* <Router> */}
      <div>
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid >
          <Row style={{width:'120%', padding:'40px'}}>
            <Col  md="6">
              <h6 className="display-7 text-black">FAQ Manager - iLabs</h6>
            </Col>
            <Col md="6"  >
              <Link to={`/add-faq`}>
            <Button className="float-end" size="sm">Add New Question</Button>
            </Link>
            </Col>
          </Row>
        </Container>
      </div>
{/* 
<Switch>
  <Route path="/add-faq">
    <AddFAQ/>
  </Route>
</Switch> */}
{/* 
      </Router> */}
    </>
  );
};

export default Header;
