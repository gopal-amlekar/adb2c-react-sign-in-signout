

import Header from './components/Header'
import Intro from './components/Intro'
import MainProfile from "./components/MainProfile"

import { ThemeProvider  } from '@material-ui/core/styles';
import { theme } from "./styles/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header title="ADB2C Demo app"></Header>
      <Intro width="100px"></Intro>
      <MainProfile></MainProfile>
    </ThemeProvider>

  )
  
}

export default App;
