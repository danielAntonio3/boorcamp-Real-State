import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import AddHouse from './pages/AddHouse';
import SearchHouse from './pages/SearchHouse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-house" element={<AddHouse />} />
        <Route path="/search-house" element={<SearchHouse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
