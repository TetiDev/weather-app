import React from 'react';
import { DateTime } from 'luxon';
import { DailyType } from './AxiosWeekType';

type DayWeatherProps = {
  data: DailyType,

};

export const DayWeather: React.FC<DayWeatherProps> = (props) => {
  const imgName = props.data.weather![0].description.replace(' ', '_');
  console.log(props);
  return (
    <div>
      <div className="day_weather">
        <p className="week_day">{DateTime.fromSeconds(props.data.dt).setLocale('en').weekdayShort}
        </p>
        <p className="date_day">{DateTime.fromSeconds(props.data.dt).setLocale('en').toFormat('LLLL dd')}</p>
        <img className="pict_day" src={`img/${imgName}.png`}
          height="50"
          alt="pict"
        />
        <p><span className="temp_day">{Math.round(props.data.temp!.day)}°</span></p>
      </div>
    </div>
  );
};
