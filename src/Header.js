import React from 'react';
import CityHeader from './CityHeader';
import SearchCity from './SearchCity';

export default function Header() {
  return (
    <div>
      <header>
        <h1>WeatherWidget</h1>
      </header>
      <div className="block_weather">
        <div className="caption_city">
          <CityHeader />
        </div>
        <div className="search_city">
          <SearchCity />
        </div>
      </div>
    </div>
  );
}
