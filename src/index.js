import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css';

const warn = console.warn;

function logWarning(...warnings){
  let showWarning = true;
  warnings.forEach(warning => {
    if (warning.includes("UNSAFE_")) showWarning = false;
    else if (warning.includes("SourceMap")) showWarning = false;
    else if (warning.includes("DevTools")) showWarning = false;
    else if (warning.includes("React Hook useEffect has a missing dependency")) showWarning = false;
  });
  if(showWarning) warn(...warnings);
}


console.warn  = logWarning;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

