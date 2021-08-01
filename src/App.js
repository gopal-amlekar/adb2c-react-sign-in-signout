import Header from "./components/Header";
import Intro from "./components/Intro";
import MainProfile from "./components/MainProfile";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import useStyles from "./styles/useStyles";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.AppRoot}>
        <div className={classes.HeaderRoot}>
          <Header title="ADB2C Demo app"></Header>
        </div>
        <div className={classes.MainContentRoot}>
          <Intro width="100px"></Intro>
          <MainProfile></MainProfile>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
