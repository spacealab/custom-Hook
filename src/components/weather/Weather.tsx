import { useEffect, useState } from "react";

import ApiLoader from "../share/ApiLoader/ApiLoader";
import ForecastList from "./ForecastList";
import {ForecastResponse} from "@/types/api/ForecastResponse"
import Image from "next/image";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import useForecastApi from "@/hook/useForecastApi"
import useWeatherApi from "@/hook/useWeatherApi"

interface Props {
    city: string
}

function Weather({city}: Props) {
    
    const [cityState, setCityState] = useState(city);
    const [coord, setCoord] = useState({lat:0, lon:0})
    const {status,  response} = useWeatherApi({city: cityState})

    const {status: ForecastStatus, response: ForecastResponse} = useForecastApi(coord);

    useEffect(() => {
        if (response) {
            setCoord(response.coord);

        }
    }, [response])

    let weather: null | weather= null;

    if(response) {
        weather = {
            city: response.name,
            wind:response.wind.speed,
            humidity: response.main.humidity,
            description: response.weather[0].description, 
            icon: response.weather[0].icon,
            daily: []
        }
    }


    return (
        <div className="flex flex-col items-center mt-[200px]">
            <Image src={"next.svg"} alt={"logo"} width={86} height={44}/>
            <div className="bg-white shadow mt-4 rounded-2xl p-8 py-16 h-[500px] w-[750px]">
                <SearchForm city={cityState} setCityState={setCityState} />

                <ApiLoader status={status}>
                    {weather && weather.city && <WeatherInfo weather={weather}/>}
                    <ApiLoader status={ForecastStatus}>
                    {ForecastResponse && <ForecastList forecast={ForecastResponse}/>}
                    </ApiLoader>
                </ApiLoader>
            </div>
        </div>
    );
}

export default Weather;