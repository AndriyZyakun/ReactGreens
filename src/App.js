import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));

    // fetch("http://localhost:3000/db.json")
    // .then((resp) => resp.json())
    // .then((json) => setPizzas(json.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home products={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
