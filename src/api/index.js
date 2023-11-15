/* eslint-disable no-undef */

import axios from "axios";

export const getPlacesData = async (bounds, type) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

  try {
    const data = await axios.get(URL, {
      headers: {
        "X-RapidAPI-Key": "57f9e04d84msh79d99359f369cf5p185643jsnc482678f9fe8",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
      params: { ...bounds },
    });
    console.log(data);
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lon) => {
  const URL = "https://community-open-weather-map.p.rapidapi.com/weather";

  try {
    const data = await axios.get(URL, {
      headers: {
        "X-RapidAPI-Key": "8cc0e75b2fmshab64863bf70ffc1p1c30cdjsn7b736153f70d",
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      },
      params: { lat, lon },
    });

    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
