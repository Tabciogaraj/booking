import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/logowanie" element={<SignIn />} />
    <Route path="/rejestracja" element={<SignUp />} />
    <Route path="/profil" element={<Profile />} />
    <Route path="/onas" element={<About />} />
  </Routes>
  </BrowserRouter>;
}
