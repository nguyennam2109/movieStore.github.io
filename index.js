import React from "react";
import ReactDOM from "react-dom";
import App from "./src/Components/App/app";
import { Provider } from 'react-redux'
import configureStore from './src/store';
import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => {
  return <App />
};
ReactDOM.render(
  <Provider store={configureStore()}>
   <Index />
  </Provider>,
  document.getElementById('root')
 );