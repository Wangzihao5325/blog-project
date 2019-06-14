import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from '../store/index';
import Router from '../router/index';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
