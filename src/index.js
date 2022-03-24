import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatFormApp from './ChatFormApp';
import { Provider} from 'react-redux';
import { store } from './store/store';




ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <ChatFormApp />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


