// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormDataProvider } from './Componet/FormDataContext';
import ChartPage from './Chart/ChartPage';
import FormPage from './Componet/FormPage';
import './App.css'
const App = () => {
  return (
    <Router>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/ChartPage" element={<ChartPage />} />
        </Routes>
      </FormDataProvider>
    </Router>
  );
};

export default App;
