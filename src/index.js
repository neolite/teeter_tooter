import React from 'react';
import ReactDOM from 'react-dom';
import { useStrictMode } from 'react-konva';

import './index.css';
import App from './App';

useStrictMode(true);

ReactDOM.render(<App />, document.getElementById('root'));
