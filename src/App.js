import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';
import React from 'react';

import './scss/app.scss';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from './redux/reducers/pizzas';


export default function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => {
        dispatch(fetchPizzas(data.pizzas))
      })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
