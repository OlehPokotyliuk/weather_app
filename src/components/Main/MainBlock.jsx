import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MainBlock.module.scss';

export const MainBlock = () => {
  const months = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
  const forecast = useSelector(state=> state.weather.data);
  if(!forecast || !forecast.daily){
    return <>...Loading</>
  }


  const daily = forecast.daily;
  return (
    <div className={classes.mainBlock}>
    
      {
        daily.map((item)=>(
          <div className={classes.forecast}>
            <p className={classes.day}>{new Date(item.dt * 1000).getDate()}</p>
            <p className={classes.month}>{months[new Date(item.dt * 1000).getMonth()]}</p>
            <p className={classes.temperature}>{item.temp.day.toFixed(0)} °C</p>
            {item.weather.map((weatherItem) => {
              const icon = weatherItem.icon;
              if (!icon) {
                return <div>...LOADING</div>;
              }
              const imageUrl = `https://openweathermap.org/img/wn/${icon}.png`;
              return <img className={classes.weatherIcon} src={imageUrl} alt="" key={icon} />;
            })}
          </div>
        ))

      }
    </div>
  );
};

