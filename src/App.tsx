import React, {useEffect, useState} from "react";
import Search from "./components/search";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(["",[]]);
    const [city2, setCity2] = useState("");
    const [weather2, setWeather2] = useState(["",[]]);

    useEffect(() => {
        //charge since localstorage
        let tmp = ["London", "Paris"];
        if (localStorage.getItem("city") !== null) {
            tmp = JSON.parse(localStorage.getItem("city"));
            setCity(tmp[0]);
            setCity2(tmp[1]);
        }
    }, []);

    useEffect(() => {
        //save to localstorage
        if (city !== "" && city2 !== "") {
            localStorage.setItem("city", JSON.stringify([city, city2]));
        }
    }, [city, city2]);

    return (
        <>
            <div className="flex flex-col items-center justify-between min-h-screen">
                <h1 className="mt-3 text-5xl font-bold text-accent">
                    weather app
                </h1>
                {/* <Search setCity={setCity} /> */}
                <section className="flex flex-col sm:flex-row w-full justify-around items-center">
                    <Search city={city} setCity={setCity} weather={weather} setWeather={setWeather}/>
                    <Search city={city2} setCity={setCity2} weather={weather2} setWeather={setWeather2}/>
                </section>

                <div></div>
            </div>
        </>
    );
}

export default App;
