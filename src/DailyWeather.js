import React from 'react';
import DayWeather from './DayWeather';

export default function DailyWeather() {
  return (
    <div>
      <div>
        <div className="block_weather">
          <div className="days_weather">
            <DayWeather/>
            <DayWeather/>
            <DayWeather/>
            <DayWeather/>
          </div>
        </div>
      </div>
    </div>
  );
}
