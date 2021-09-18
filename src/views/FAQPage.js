import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import React from "react";
// reactstrap components
import { Badge, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media, Progress, Table, UncontrolledTooltip, Container, Row, Button, Modal } from "reactstrap";

const FAQPage = (props) => {
  const [exampleModal, setmodalDemo] = useState(false);
  const [posts, setPosts] = useState([]);


useEffect(() => {
  axios.get(`http://localhost:8080/faqs/view-faqs`)
  .then((res) => {
    setPosts(res.data);
    console.log(res.data);
  })

}, []);

const deleteFAQ = (_id) => {
  console.log('id is: ', _id);
  axios
    .delete(`http://localhost:8080/faqs/delete-faq/${_id}`)
    .then((response) => {
      console.log(response);
      // props.history.push('/admin');
    })
    .catch((error) => {
      console.log(error);
    });

    //refreshing
  window.location.reload(false);
};

  //toggle function
  function toggleModal() {
    setmodalDemo(!exampleModal);
  }

  return (
    <>
      <div style={{ backgroundColor: "lightsteelblue" }}>
        <Header />
        <SearchBar />

        <Container>
          <Row>
            <Table style={{ backgroundColor: "white" }} className="align-items-center rounded" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Question</th>
                  <th scope="col">Category</th>
                  <th scope="col">Status</th>
                  <th scope="col"> Action </th>
                </tr>
              </thead>
              <tbody>
              {posts.map((posts) => (
                <tr key={posts._id}>
                  <td>{1} </td>
                  <td> {posts.question} </td>
                  <td>  {posts.category}</td>
                  <td>
                    <Button>{posts.status}</Button>
                  </td>
                  <td className="text-right">
                    <UncontrolledDropdown>
                      <DropdownToggle className="btn-icon-only text-dark" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <Link to={`/update-faq/${posts._id}`}>
                        <DropdownItem>View</DropdownItem>
                        </Link>
                        <DropdownItem>Deactivate</DropdownItem>                    
                        <DropdownItem onClick={() => toggleModal("exampleModal")}> Delete</DropdownItem>

                        <Modal className="modal-dialog-centered" isOpen={exampleModal} toggle={() => toggleModal("exampleModal")}>
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Confirm to delete this FAQ
                            </h5>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body">Do you want to delete this FAQ?</div>
                          <div className="modal-footer">
                            <Button color="primary" type="button"  onClick={deleteFAQ.bind(props.this, posts._id)}>
                              Confirm Delete
                            </Button>
                            <Button color="secondary" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                              Close
                            </Button>
                          </div>
                        </Modal>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
