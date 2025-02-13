import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import PhotoFeed from "./PhotoFeed";
// import { get_gallery_images } from "../../constants/endpoints";

const Portfolio = (props) => {
  const [portfolioItems, setPortfolioItems] = useState([]);



useEffect(() => {
  axios.get('http://localhost:8000/api/portfolio')
    .then(res => {
      setPortfolioItems(res.data);
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    });
}, [])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <PhotoFeed portfolioItems={portfolioItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
