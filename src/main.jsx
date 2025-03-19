import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'hamburgers/dist/hamburgers.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
