import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '~/components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '~/theme';
import { ThemeProvider } from '@emotion/react';
import Layout from '~/components/layout/Layout';
import { RecoilRoot } from 'recoil';
import FullViewPhotoWrapper from '~/components/wrappers/FullViewPhotoWrapper';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <FullViewPhotoWrapper>
          <Router>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </FullViewPhotoWrapper>
      </RecoilRoot>
      <CssBaseline />
    </ThemeProvider>
  </MuiThemeProvider>
);

export default App;
