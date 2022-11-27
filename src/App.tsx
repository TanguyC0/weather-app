import React, {useEffect, useState} from "react";
import axios from "axios";
import Cart from "./components/cart";
import Search from "./components/search";
import Picture from "./components/picture";

function App() {
    const [city, setCity] = useState("London");
    const [location, setLocation] = useState({lat: 0, lon: 0});
    const [weather, setWeather] = useState([]);
    const [data, setData] = useState("");

    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e26e112b95e56f37543b35f9b34a27bd`,
            )
            .then((res) => {
                const persons = res.data;
                setLocation(persons[0]);
            });

            
            axios.get(`https://api.unsplash.com/photos/random?page=1&query=${city}&client_id=4zYjUQ09s9hZpE6ZfBRjMlF_gEaGGaYJeBmhWR45rNU`).then((res) => {
                setData(res.data.urls.regular) ;
            });
    }, [city]);

    useEffect(() => {
        if (location.lat !== undefined) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=e26e112b95e56f37543b35f9b34a27bd`,
                )

                .then((res) => {
                    const datas:any = [];
                    for (let i = 0; i < 5; i++) {
                        datas.push(res.data.list[8 * i]);
                    }
                    setWeather(datas);
                });
        }
    }, [location]);

    return (
        <>
            <div className="flex flex-col items-center justify-between min-h-screen">
                <h1 className="pt-3 text-5xl font-bold text-accent">
                    weather app {city}
                </h1>
                {/* <Search setCity={setCity} /> */}
                <img src={data} alt="" />
                <picture data-name={city} />
                {weather.length !== 0 ? <Cart data={weather} /> : "loading"}
                <div></div>
            </div>
        </>
    );
}

export default App;
