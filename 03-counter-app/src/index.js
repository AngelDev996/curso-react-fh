import React from 'react';
import * as ReactDOM from 'react-dom/client';

import PrimeraApp from './PrimeraApp';

import './index.css'




const divRoot = document.querySelector('#root')

const root = ReactDOM.createRoot(divRoot)

// root.render(saludo)

root.render(<PrimeraApp/>)
