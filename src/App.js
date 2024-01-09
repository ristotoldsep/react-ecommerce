import { Routes, Route } from 'react-router-dom';

import Layout from './routes/layout/layout.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';

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
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
  ) 
};

export default App;
