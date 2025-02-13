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
    })
    .catch(err => {
      console.log(err)
    });
}, [])


  // useEffect(() => {
  //   fetchPortfolioPhotos();
  // }, []);

  // Will need to put actual database fetch request in here, this is a placeholder for functionallity. PhotosAPI.JS will need to be replaced with the actual database "View-All"
  // async function fetchPortfolioPhotos() {
  //   console.log("in fetch function from backend");
  //   try {
  //     const response = await fetch(get_gallery_images);
  //     const data = await response.json();
  //     if (data.files) {
  //       const imageFiles = data.files
  //         .filter((file) => file.mimeType.startsWith("image/"))
  //         .map((file) => ({
  //           id: file.id,
  //           name: file.name,
  //           url: `https://drive.google.com/uc?id=${file.id}`,
  //         }));
  //       setPortfolioItems(imageFiles);
  //     }
  //   } catch (error) {
  //     console.log("Error fetching photos from gitHub", error);
  //   }
  // }

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
