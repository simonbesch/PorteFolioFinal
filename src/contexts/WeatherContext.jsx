import { createContext, useContext, useEffect, useState } from "react";
const WeatherContext = createContext();

// eslint-disable-next-line react/prop-types
export function WeatherProvider({ children }) {
  const KEYWEATHER = "a64b288f12ac5afada93e8e8c413d270";
  const [time, setTime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Tours&appid=${KEYWEATHER}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTime(data);
        setIsLoading(true);
      });
  }, []);

  return (
    <WeatherContext.Provider value={{ time, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);
