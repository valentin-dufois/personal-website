import React              from 'react';
import ReactDOM           from 'react-dom/client';
import App                from './App';
import './i18n.js';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  // Pre-rendered by react-snap: hydrate to attach to existing HTML
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
} else {
  // Dev mode or no pre-render: normal render
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}

serviceWorker.unregister();
