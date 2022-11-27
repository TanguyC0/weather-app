import axios from "axios";
import React,{useState} from "react";

export default function Picture({name}) {
    const [data, setData] = useState("");
    axios.get(`https://api.unsplash.com/photos/random?page=1&query=${name}`).then((res) => {
        setData(res.data.urls.regular) ;
    });
    console.log(name);
    console.log(data);
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <h1 className="pt-3 text-5xl font-bold text-accent">weather app</h1>
            <img src={data} alt="" />
            <div></div>
        </div>
    );
}