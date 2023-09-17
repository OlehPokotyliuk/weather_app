import React from 'react';
import classes from './Location.module.scss';
import { useSelector } from 'react-redux';
export const Location = () => {
  const timezone = useSelector(state=> state.weather.data.timezone)
  if(!timezone){
    return <div>Loading...</div>;
  }
  const city = timezone.split('/')[1];
  return (
    <div className={classes.location}>
      <img className={classes.titleIcon} src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" />
      <p className={classes.title}>Город: {city}</p>
    </div>
  );
};

