import { useEffect, useState } from "react";

import {WeatherResponse} from "@/types/api/WeatherResponse"
import { callWeatherApi } from "@/api/api";

interface Props {
    city: string;
}

interface WeatherResult {
    status: "pending"| "isLoading" |"hasError" | "isSuccess"
    response: WeatherResponse | false;

}


export default function useWeatherApi({city}: Props) : WeatherResult {

    const [response, setResponse] = useState<WeatherResponse | false>(false);

    const [status, setStatus] = useState<"pending"| "isLoading" |"hasError" | "isSuccess">("pending")

    const apiCall = async () => {
        setStatus("isLoading");
        const result = await callWeatherApi({city});   
        setResponse(result);     
        if(result === false) {
            setStatus("hasError");
            return;
        }
        setStatus("isSuccess");
        setResponse(result);
    }

    useEffect (() => {
        apiCall();
    },[city])

    return {status, response}
}