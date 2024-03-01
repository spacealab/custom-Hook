import {ForecastResponse} from "@/types/api/ForecastResponse"
import {WeatherResponse} from "@/types/api/WeatherResponse"

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apikey = "3dce9b1c66837262a25b3f448d354a76";

interface WeatherProps {
    city: string,
}

interface ForecastProps {
    lon: number,
    lat: number,
}


export async function callWeatherApi({city} : WeatherProps) :Promise<WeatherResponse | false> {
    await sleep(2000)
    const response = await fetch( baseUrl + `weather?q=${city}&appid=${apikey}&units=metric`)
    if(response.ok) {
        return await response.json();
    } else {
        return false
    }
}


export async function callForecastApi({lat, lon}:ForecastProps) :Promise<ForecastResponse> {
    const response = await fetch( baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    await sleep(5000)
    return await response.json();
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))