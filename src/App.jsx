import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import SignUp from './Components/SignUp';
import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<SignUp />} />
          <Route path='/restablecer-contrasena' element={<ResetPassword />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
