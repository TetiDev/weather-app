import React from 'react';

export default function DayWeather() {
  // eslint-disable-next-line global-require
  const imgSky = require('./img/clear_sky.png');
  return (
    <div>
      <div className="day_weather">
        <p className="week_day">Thu</p>
        <p className="date_day">14 July</p>
        <img
          className="pict_day"
          src={imgSky}
          height="50"
          alt="pict"
        />
        <p>
          <span className="temp_day">30°</span>
        </p>
      </div>
    </div>
  );
}
