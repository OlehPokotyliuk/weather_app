import React from 'react';
import classes from './Temperature.module.scss';
import { useSelector } from 'react-redux';

export const Temperature = () => {
  const tempData = useSelector(state=> state.weather.data.current);

  if(!tempData|| !tempData.temp || !tempData.feels_like){
    return <div>Loading...</div>;
  }

  const {temp, feels_like} = tempData;
  
  const hot = 'https://cdn-icons-png.flaticon.com/128/1146/1146842.png';
  const cold = 'https://cdn-icons-png.flaticon.com/512/5641/5641619.png';
  const winter = 'https://cdn-icons-png.flaticon.com/128/4531/4531744.png';
  
  return (
    <div className={classes.temperature}>
      <div className={classes.title}>
        <img className={classes.termometer} src={'https://cdn-icons-png.flaticon.com/512/2100/2100100.png'}/>
        <h3 className={classes.titleSecond}>Температура: {temp.toFixed(0)} °C</h3>
      </div>
      <div className={classes.feelsLike}>
        {feels_like < 0 && feels_like <=10&& <img src={winter} alt="" />}
        {feels_like > 10 && feels_like <=18&& <img src={cold} alt="" />}
        {feels_like > 18&& <img src={hot} alt="" />}
        <p className={classes.paragraph}>Чувствуется как: {feels_like.toFixed(0)} °C</p>
      </div>
      
    </div>
  );
};

