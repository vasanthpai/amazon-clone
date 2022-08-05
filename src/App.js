import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import Login from './components/Login';
import { useStateValue } from './api/StateProvider';
import { auth } from './auth/firebase';
import { useEffect } from 'react';
import Checkout from './components/Checkout';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
