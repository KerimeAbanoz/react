import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.header};
  padding: 4rem 0;
`;

export const Logo = styled.img `
    width: 300px;
    padding: 2rem;
`;

export const Nav = styled.img `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default StyledHeader;
