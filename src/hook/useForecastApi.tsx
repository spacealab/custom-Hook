import { useEffect, useState } from "react";

import { ForecastResponse } from "@/types/api/ForecastResponse";
import { callForecastApi } from "@/api/api";

interface ForecastProps {
    lat: number,
    lon: number,
}

export default function useForecastApi({lat, lon}: ForecastProps) {
    const [response, setResponse] = useState<ForecastResponse | false>(false);

    const [status, setStatus] = useState<"pending"| "isLoading" |"hasError" | "isSuccess">("pending")

    const apiCall = async () => {
        setStatus("isLoading");
        const result = await callForecastApi({lat, lon});   
        setResponse(result);     
        if(result === false) {
            setStatus("hasError");
            return;
        }
        setStatus("isSuccess");
        setResponse(result);
    }

    useEffect (() => {
        if(lat !==0 && lon !== 0)
            apiCall();
    },[lat, lon])

    return {status, response}
}