import { useState } from "react";
import styled from "styled-components";

const MainImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageChanger = styled.div`
  display: flex;
  flex-grow: 0;
  gap: 10px;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
    border-color:#ccc;`
      : `transparent; opacity:.7;`}
  padding: 2px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <ImageWrapper>
      <MainImage src={activeImage} />
      <ImageChanger>
        {images.map((img) => (
          <ImageButton
            key={img._id}
            onClick={() => setActiveImage(img)}
            active={img === activeImage}
          >
            <Image src={img} />
          </ImageButton>
        ))}
      </ImageChanger>
    </ImageWrapper>
  );
};

export default ProductImages;
