import './App.css';
import React from 'react';
import Header from './Header';
import CurrentCity from './CurrentCity';
import DailyWeather from './DailyWeather';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentCity />
      <DailyWeather />
      <Footer />
    </div>
  );
}

export default App;
