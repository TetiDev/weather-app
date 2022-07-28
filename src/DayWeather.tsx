import React from 'react';
import { DateTime } from 'luxon';
import { DailyType } from './AxiosWeekType';

type DayWeatherProps = {
  data: DailyType,
};
export const DayWeather: React.FC<DayWeatherProps> = (props) => {
  console.log(props);
  return (
    <div>
      <div className="day_weather">
        <p className="week_day">{DateTime.fromSeconds(props.data.dt).setLocale('en').weekdayShort}
        </p>
        <p className="date_day">ngnbnbnbn</p>
        <img
          className="pict_day"
          // src={imgSky}
          height="50"
          alt="pict"
        />
        <p>
          <span className="temp_day">{33}°</span>
        </p>
      </div>
    </div>
  );
};
