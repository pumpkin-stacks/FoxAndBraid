import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PhotoFeed from "./PhotoFeed";
import Photos from "./PhotosAPI.JS";

const Portfolio = (props) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetchPortfolioPhotos();
  }, []);

  // Will need to put actual database fetch request in here, this is a placeholder for functionallity. PhotosAPI.JS will need to be replaced with the actual database "View-All"
  function fetchPortfolioPhotos() {
    setPortfolioItems(Photos);
  }

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
