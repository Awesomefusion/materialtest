import React from "react"
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import App from './app';


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
    <CssBaseline>
      <App/>
    </CssBaseline>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

