import React from "react";
import Table from "./table";

export default function Fiche({city,weather}) {
    // city[2].length !== 0 ? console.log(`${city[0]} ${city[1].lat} ${city[1].lon} ${city[2][0].main.temp} `) : console.log(`${city[0]} no data`);
    return (
        <div>
            <h2 className="text-2xl font-bold text-accent text-center">{city}</h2>
            <img src={city[3]} alt="" className="h-64" />
            {/* {city[2].length !== 0 ? <Table city={city[2]} /> : "loading"} */}
            {weather.length !== 0 ? <Table city={weather} /> : "loading"}
        </div>
    );
}
