import "@fontsource/roboto";
import theme from "./theme";
import Routes from "./routes";
import AppBar from "./components/AppBar";
import { Container } from "./styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar />

      <Container maxWidth="lg">
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
