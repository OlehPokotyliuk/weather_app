import React, {  useEffect, useState } from 'react';
import { WeatherIcon } from './components/Header/WeatherIcon/WeatherIcon';
import { Location } from './components/Header/Location/Location';
import { Temperature } from './components/Header/Temperature/Temperature';
import classes from './App.module.scss'
import { DateBlock } from './components/Header/DateBlock/DateBlock';
import { useDispatch } from 'react-redux';
import { weatherList } from './redux/weatherSlice';
import { MainBlock } from './components/Main/MainBlock';
// const time = new Date().getHours();
const time = 23;
const morning = 'url("https://images4.alphacoders.com/218/218354.jpg")';
const day = 'url("https://images3.alphacoders.com/132/1329972.png")';
const evening = 'url("https://images5.alphacoders.com/132/1323959.png")';
const night = 'url("https://images6.alphacoders.com/132/1327900.png")';
let variable = ''
if(time >=10 && time <=17){
  variable = day;
}else if(time > 17 && time <=22){
  variable = evening
}else if(time > 22 && time <= 24){
  variable = night;
}else if(time > 0 && time < 6){
  variable = night;
}
else if(time > 6 && time < 10){
  variable = morning;
}
console.log(variable);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const key = '91bfea3d18788aa26baa959ad457200b';
    const lang = 'ru';
    async function fetchData() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=50.45&lon=30.52&appid=${key}&cnt=7&lang=${lang}&units=metric`);
      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }
      const weather = await response.json();
      dispatch(weatherList(weather));
      
      } catch (err) {
        console.error('Ошибка при получении данных');
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className={classes.wrapper} style={{'--background-image':variable}}>
      <div className={classes.weatherHead}>
          <Temperature/>
          <Location />
          <WeatherIcon />
          <DateBlock/>
      </div>
      <div className={classes.weatherCenter}>
        <p className={classes.weatherParagraph}>Погода на неделю</p>
      </div>
      <div className={classes.footer}>
        <MainBlock/>
      </div>
      
    </div>
  );
}
export default App;