import React, {useState, useEffect} from "react";
import Table from "./table";
import {Chart as ChartJS, registerables} from "chart.js";
import {Line} from "react-chartjs-2";
ChartJS.register(...registerables);

export default function Fiche({city, weather}) {
    const [graf, setGraf] = useState({
        labels: weather[1].map((item) => item.dt_txt.slice(0, 10)),
        datasets: [
            {
                label: "Temperature",
                data: weather[1].map((item) => item.main.temp),
            },
        ],
    });

    useEffect(() => {
        setGraf({
            labels: weather[1].map((item) => item.dt_txt.slice(0, 10)),
            datasets: [
                {
                    label: "Temperature",
                    data: weather[1].map((item) => item.main.temp),
                },
            ],
        });
    }, [weather]);
    return (
        <>
            <h2 className="text-2xl font-bold text-accent text-center">
                {city}
            </h2>
            <img src={weather[0]} alt="" className="h-64" />
            {/* {city[2].length !== 0 ? <Table city={city[2]} /> : "loading"} */}
            {weather[1].length !== 0 ? <Table city={weather[1]} /> : "loading"}
            {weather[1].length !== 0 ? <Line data={graf} /> : "loading"}
        </>
    );
}
