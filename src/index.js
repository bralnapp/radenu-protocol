import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContractContextProvider } from './context/ContractContext';
// import { Web3ReactProvider } from '@web3-react/core';
// import { ethers } from 'ethers';

// const getLibrary = (provider) => {
//   return new ethers.providers.Web3Provider(provider);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContractContextProvider>
      <App />
    </ContractContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
