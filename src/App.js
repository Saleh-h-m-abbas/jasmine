import Login from './components/login/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Users from './pages/users/Users';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="login" element={<Login />} />
          </Route>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
          <Route>
            <Route path="/customers" element={<Customers />} />
          </Route>
          <Route>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
