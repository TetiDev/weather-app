import React from 'react';

export default function CurrentCity() {
  return (
    <div>
      <div className="current_city">
        <div
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            className="ico_pict_day"
            src="https://img.kidico.com.ua/shecode/Group_1.png"
            style={{ marginRight: '10px' }}
            alt=""
          />
          <span className="caption_current_city">Warszawa</span>
        </div>
        <div className="block_weather block_weather__color">
          <div className="weather_city">
            <div style={{ width: '60%' }}>
              <img
                className="pict_day"
                src="https://img.kidico.com.ua/shecode/sunny.png"
                height="140"
                alt="type"
              />
              <p className="type_weather">Sunny</p>
              <p className="cur_date">Tue, 14 July</p>
            </div>
            <div style={{ width: '40%', position: 'relative' }}>
              <div>
                <span className="current_temp_day">20</span>
                <span className="current_measure">°</span>
              </div>

              <div
                style={{
                  padding: '0', position: 'absolute', top: 0, right: 0,
                }}
              >
                <a className="measureC" href="#">
                  °C
                </a>
                <span className="measureHr"> / </span>
                <a href="#" className="measureF">
                  °F
                </a>
              </div>
              <div style={{ textAlign: '', display: 'flex' }}>
                <div>
                  <img
                    className="pict_day"
                    src="https://img.kidico.com.ua/shecode/wind.png"
                    height="40"
                    alt="wind"
                  />
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <p>Wind</p>
                  <span className="speed_wind">4</span>
                  <span> km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
