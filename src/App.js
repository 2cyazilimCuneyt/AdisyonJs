import React from 'react';
import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddMenu from './pages/AddMenu';
import AddRoom from './pages/AddRoom';
import NavbarMenu from './components/NavbarMenu';

const appRoutes = [
  { key: 1, path: "/", element: <AddRoom /> },
  { key: 2, path: "/menu", element: <AddMenu /> },
]

function App() {
  return (
    <Router>
        <div>
          <NavbarMenu/>
        <Routes>
          {appRoutes.map((route)=> (
            <Route {...route} />
          ))}
        </Routes>
        </div>
    </Router>
  );
}

export default App;
