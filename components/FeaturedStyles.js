import styled from "styled-components";
import ButtonElement from "./Button";

export const Background = styled.div`
  background-color: #491454;
  color: #fff;
  padding: 50px 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  img {
    max-width: 100%;
    max-height: 200px;
  }

  div:nth-child(1) {
    order: 1;
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    img {
      max-width: 100%;
    }

    div:nth-child(1) {
      order: 0;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

export const Columns = styled.div`
  display: flex;
  align-items: center;
`;
