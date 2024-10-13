import Link from "next/link";
import styled from "styled-components";
import { ButtonStyles } from "./Button";

const StyledBntLink = styled(Link)`
  ${ButtonStyles}
`;

const ButtonLink = (props) => {
  return <StyledBntLink {...props} />;
};

export default ButtonLink;
