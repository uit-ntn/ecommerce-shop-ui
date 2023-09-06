import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes thay vì Switch

import routes from './routes/routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes> {/* Sử dụng Routes thay vì Switch */}
          {routes.map((route, index) => {
            const Page = route.page;
            return (
              <Route key={index} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
