import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Есть dispatch. В него передается action
// То, как action будет менять состояние - определено внутри reducer
// Reducer - чистая функция, которая принимает состояние и action и всегда возвращает новый объект состояния
// Reducer передается в store
// Store  с помощью провайдера(Provider) передается в react-компоненты