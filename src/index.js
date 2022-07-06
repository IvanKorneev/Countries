import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../../../../Downloads/code/07 - Проект 2/001 proj2-starter/src/index.css';
import App from '../../../../Downloads/code/07 - Проект 2/001 proj2-starter/src/App';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
