import React from "react";
import Table from "./table";

export default function Fiche({city,weather}) {
    console.log(weather);
    return (
        <div>
            <h2 className="text-2xl font-bold text-accent text-center">{city}</h2>
            <img src={weather[0]} alt="" className="h-64" />
            {/* {city[2].length !== 0 ? <Table city={city[2]} /> : "loading"} */}
            {weather[1].length !== 0 ? <Table city={weather[1]} /> : "loading"}
        </div>
    );
}
