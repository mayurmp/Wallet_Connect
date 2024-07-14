import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import { Card } from './components/card/Card';
import { WalletProvider } from './components/walletProvider/WalletProvider';

export default function App() {
  return (
    <Router>
      <WalletProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </WalletProvider>
    </Router>
  );
}