import React, {useRef, useEffect} from "react";
import { recherche } from "../features/recherche";
import Fiche from "./fiche";

export default function Search({city, setCity, weather,setWeather}) {
    
    useEffect(() => {
        recherche(city, setWeather, weather);
    }, [city]);

    const countryRef = useRef<HTMLInputElement>(null);

    const action = (e) => {
        if (e.key === "Enter") {
            if (!countryRef.current) throw Error("countryRef is not assigned");
            setCity(countryRef.current.value);
            countryRef.current.value = "";
        }
    };

    return (
        <div className=" flex flex-col items-center w-96 my-10">
            <input
                type="text"
                placeholder="Search City"
                className="input input-bordered input-accent w-full max-w-xs"
                onKeyDown={action}
                ref={countryRef}
            />
            {city !== undefined ? <Fiche city={city} weather={weather} /> : "undefined"}
        </div>
    );
}
