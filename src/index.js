import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';

import { PersistGate } from 'redux-persist/integration/react';

import { Elements } from '@stripe/react-stripe-js';

import { stripePromise } from './utils/stripe/stripe.utils';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
              {/* <CartProvider> */}
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
              {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
