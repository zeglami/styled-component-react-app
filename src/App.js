import { ThemeProvider } from "styled-components";
import { ContainerStyled } from "./styled/Container.styled";
import { Button } from "react-bootstrap";
import StyledHeader from "./components/Header/StyledHeader";
import { theme } from "./styled/Global.styled";
import GlobalStyles from "./styled/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <StyledHeader />

        <ContainerStyled>
          <h1>hh</h1>
          <Button variant="success">Success</Button>{" "}
        </ContainerStyled>
      </>
    </ThemeProvider>
  );
}

export default App;
