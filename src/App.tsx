import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '~/components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '~/theme';
import { ThemeProvider } from '@emotion/react';
import Layout from '~/components/layout/Layout';
import { ListDataContext } from '~/contexts/';
import { listData } from '~/data/';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <ListDataContext.Provider value={listData}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ListDataContext.Provider>
      <CssBaseline />
    </ThemeProvider>
  </MuiThemeProvider>
);

export default App;
