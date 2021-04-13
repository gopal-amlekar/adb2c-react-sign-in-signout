import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { PublicClientApplication } from "@azure/msal-browser"
import { msalConfig } from "./authConfig";
import { MsalProvider } from '@azure/msal-react';


const msalInstance = new PublicClientApplication(msalConfig)

const AppProvider = () => (
  <React.StrictMode>

    <MsalProvider instance={msalInstance}>
      <App></App>
    </MsalProvider>

  </React.StrictMode>
)


ReactDOM.render(<AppProvider />, document.getElementById('root'))