import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/main.scss'
import Header from './components/Header'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
       <Router>
         <Header />
         <Routes>
           {/* <Route path="/" element={} /> */}
        </Routes>
      </Router>
  </React.StrictMode>
)
