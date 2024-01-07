import { Routes, Route } from 'react-router-dom';

import Layout from './routes/layout/layout.component';
import Home from "./routes/home/home.component";
import Signin from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      Shop
    </div>
  )
}

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<Signin />} />
    </Route>
  </Routes>
  ) 
};

export default App;
