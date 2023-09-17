import React from 'react';
import classes from './WeatherIcon.module.scss';
import { useSelector } from 'react-redux';
export const WeatherIcon = () => {
  const current = useSelector(state=>state.weather.data.current);
  if(!current || !current.weather){
    return <div>Loading...</div>;
  }
  const {id, description} = current.weather[0];
  const sun = 'https://cdn-icons-png.flaticon.com/512/979/979585.png';
  const fewClouds = 'https://cdn-icons-png.flaticon.com/512/1888/1888282.png';
  const clouds = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png';
  const veryClouds = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
  const rain = 'https://cdn-icons-png.flaticon.com/512/4088/4088981.png';
  const thunderstorm = 'https://cdn-icons-png.flaticon.com/512/4724/4724103.png';
  const snow = 'https://cdn-icons-png.flaticon.com/512/642/642000.png';
  const mist = 'https://cdn-icons-png.flaticon.com/512/6142/6142667.png';


  return (
    <div className={classes.weatherCenter}>
          {(id >= 200 && id <=232)&&<img className={classes.weatherIcon} src={thunderstorm} alt="" />}
          {(id >= 300 && id <=321)&&<img className={classes.weatherIcon} src={rain} alt="" />}
          {(id >= 500 && id <=504)&&<img className={classes.weatherIcon} src={fewClouds} alt="" />}
          {(id >= 511 && id <=531)&&<img className={classes.weatherIcon} src={rain} alt="" />}
          {(id >= 600 && id <=622)&&<img className={classes.weatherIcon} src={snow} alt="" />}
          {(id >= 701 && id <=781)&&<img className={classes.weatherIcon} src={mist} alt="" />}
          {(id ===800)&&<img className={classes.weatherIcon} src={sun} alt="" />}
          {(id > 800 && id <=804)&&<img className={classes.weatherIcon} src={clouds} alt="" />} 
          <p>{description}</p>
          
        </div>
  );
};

