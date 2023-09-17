import React from 'react';
import classes from './DateBlock.module.scss';
const months = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
const daysOfWeek = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
export const DateBlock = () => {
  const date = new Date();
  const month = date.getMonth()
  const dayDigit = date.getDate(); 
  const day = date.getDay();
  const monthName = months[month];
  const dayName = daysOfWeek[day];
  return (
    <div className={classes.dateWidget}>
        <div className={classes.dateImage}>
          <img className={classes.month} src='https://cdn-icons-png.flaticon.com/512/10529/10529862.png'/>
        </div>
        <div className={classes.paragraphs}>
            <p>{dayDigit} {monthName}</p>
            <span>{dayName}</span>
          </div>
    </div>
  );
};

