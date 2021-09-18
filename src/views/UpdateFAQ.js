import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import React from "react";
// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

const UpdateFAQ = (props) => {

  const [FAQs, setFAQs] = useState(0);
  
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    question: FAQs.question,
    category: FAQs.category,
    status: FAQs.status,
  };
  
  const validationSchema = Yup.object({
    question: Yup.string().required("*Required!"),
    category: Yup.string().required("*Required!"),
    status: Yup.string().required("*Required!"),
  });



  useEffect(() => {
    axios
      .get(`http://localhost:8080/faqs/view-one-faq/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setFAQs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let history = useHistory();

  const onSubmit = (values) => {
    console.log("Form Date", values);
    axios
      .put(`http://localhost:8080/faqs/update-faq/${props.match.params._id}`, values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        history.push({
          pathname: `/`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div style={{ backgroundColor: "lightsteelblue" }}>
        <Header />
        <SearchBar />

        <Container>
          <Row>
            <Col className="order-xl-1">
              <Card className=" shadow">
                <CardHeader className="bg-white">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h1 className="mb-0">Add FAQ</h1>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={formik.handleSubmit}>
                    <Row>
                      <Col md="10">
                        <FormGroup>
                          <label>Question</label>
                          <Input
                            id="exampleFormControlTextarea1"
                            placeholder="Question Here..."
                            rows="3"
                            type="textarea"
                            name="question"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={FAQs.question}
                          />
                          {formik.touched.question && formik.errors.question ? <div style={{ color: "red" }}>{formik.errors.question}</div> : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Category</label>
                          <Input id="exampleFormControlInput1" type="select" name="category" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={FAQs.category}>
                            <option>{FAQs.category}</option>
                            <option>About Company</option>
                            <option>Other</option>
                          </Input>
                          {formik.touched.category && formik.errors.category ? <div style={{ color: "red" }}>{formik.errors.category}</div> : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Status</label>
                          <Input id="exampleFormControlInput1" type="select" name="status" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={FAQs.status}>
                            <option>{FAQs.status}</option>
                            <option>Published</option>
                            <option>Draft</option>
                          </Input>
                          {formik.touched.status && formik.errors.status ? <div style={{ color: "red" }}>{formik.errors.status}</div> : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Submit FAQ
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default UpdateFAQ;
