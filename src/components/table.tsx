import React from "react";

export default function Table({city}) {

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className="text-center">Day</th>
                        <th className="text-center">Weather</th>
                        <th className="text-center">temperatur</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {city.map((item) => (
                        <tr key={item.dt}>
                            <td className="text-center">{item.dt_txt.slice(0,10)}</td>
                            <td className="text-center">{item.weather[0].main}</td>
                            <td className="text-center">{item.main.temp} °C</td>
                        </tr>
                    ))}
                </tbody>

                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th className="text-center">Day</th>
                        <th className="text-center">Weather</th>
                        <th className="text-center">temperatur</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
