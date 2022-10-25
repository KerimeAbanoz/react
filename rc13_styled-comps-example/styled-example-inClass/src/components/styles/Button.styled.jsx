import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  padding: 1rem 2rem;

  background-color: ${({ bg }) => (bg ? bg : "white")};
  color: ${({ color }) => (color ? color : "white")};
  border: 1px solid #a62440;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transform: scale(0.97);
  }
`;

export default Button;
