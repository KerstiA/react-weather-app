import React from "react";

export default function FormattedDate(props) {
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="currenttime">
      {date}/{month}/{year} {hours}:{minutes}
    </div>
  );
}
