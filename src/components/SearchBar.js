import { Button, Container, Row, Col, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <>
      <div>
        {/* Header container */}
        <Container className="d-flex align-items-center"  fluid>
          <Row className="align-items-center rounded" fluid style={{ width: "100%", margin: "40px", backgroundColor: "white" }}>
            <Form className="d-md-flex " style={{margin: "30px"}} >
              <FormGroup className="mb-0">
                <InputGroup>
                  <Input placeholder="Search" type="text" style={{backgroundColor:'lightgrey', width:1350}} />              
                     <Button style={{marginLeft:10, width:'200px'}} color="primary" >Search</Button>      
                </InputGroup>
              </FormGroup>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SearchBar;
