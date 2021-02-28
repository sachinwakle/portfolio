import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import BaseGrid from "./components/BaseGrid";
import SectionInfo from './components/SectionInfo'
import BulletItem from "./components/BulletItem";
import { Typography } from "@material-ui/core";
import ExperienceOne from "./components/ExperienceOne";
import ExperienceFirst from "./components/ExperienceFirst";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BaseGrid/>
        {/* <SectionInfo/> */}
        {/* <BulletItem leftContent={lc} rightContent={rc}/> */}
        {/* <ExperienceOne/> */}
        {/* <ExperienceFirst/> */}
      </div>
    </ThemeProvider>
  );
}

const lc = <Typography>2015-2018</Typography>;
const rc = <Typography>Tcs  fgdfjgfdlgj</Typography>;

export default App;
