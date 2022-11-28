import React, {useEffect, useState} from "react";
import Search from "./components/search";

function App() {
    const [city, setCity] = useState("London");
    const [weather, setWeather] = useState([]);
    const [city2, setCity2] = useState("Paris");
    const [weather2, setWeather2] = useState([]);

    return (
        <>
            <div className="flex flex-col items-center justify-between min-h-screen">
                <h1 className="pt-3 text-5xl font-bold text-accent">
                    weather app
                </h1>
                {/* <Search setCity={setCity} /> */}
                <section className="flex w-full justify-around">
                    <Search city={city} setCity={setCity} weather={weather} setWeather={setWeather}/>
                    <Search city={city2} setCity={setCity2} weather={weather2} setWeather={setWeather2}/>
                </section>

                <div></div>
            </div>
        </>
    );
}

export default App;
