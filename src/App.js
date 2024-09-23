import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

import Layout from './routes/layout/layout.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { setCurrentUser } from "./store/user/user.action";

const App = () => {
   const dispatch = useDispatch(); // Actually redux will generate only one reference, it will not change, but added it to useEffect dependency to remove error warning

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        
        // console.log("unsubscribe", user);

        if(user) {
            createUserDocumentFromAuth(user);
        }

        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
}, [dispatch]);

  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  </Routes>
  ) 
};

export default App;
