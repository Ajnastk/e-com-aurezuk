import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import store from './app/Store.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


