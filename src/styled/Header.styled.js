import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${(props)=>props.bg};
  padding: 40px 0;

  h1 {
    color: ${({theme})=>theme.colors.violet};
  }
`;
