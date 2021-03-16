import React from "react";
import styled from "styled-components";
import ImageCards from "./ImageCards";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 15px;
  grid-auto-rows: 10px;
`;

const ImagesList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCards key={image.id} image={image} />;
  });

  return <Card>{images}</Card>;
};
export default ImagesList;
