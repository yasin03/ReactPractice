import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Review from "./review";
import data from "../../assets/data/reviews.json";

const Reviews = () => {
  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col key={item.id} sm={6} lg={4}>
            <Review item={item}></Review>
          </Col>
        ))}
        <Col>
          <Review />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
