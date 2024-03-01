import type {Daily, ForecastResponse} from "@/types/api/ForecastResponse";

import ForecastItem from "./ForecastItem";

interface Props {
    forecast: ForecastResponse
}

function ForecastList({forecast}: Props) {
    // Return null or an empty div when forecast or forecast.daily is not available
    if (!forecast || !forecast.daily) {
        return null; // or return <></>; or return <div></div>;
    }
    
    return (
        <div className="grid grid-cols-8">
            {forecast.daily.map((item: Daily, index: number) => {
                return <ForecastItem key={index} item={item}/>
            })}
        </div>
    );
}

export default ForecastList;
