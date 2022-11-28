import axios from "axios";

export async function recherche(city: string, setweather: (data: any) => void,data:any) {
    await axios
        .get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e26e112b95e56f37543b35f9b34a27bd`,
        )
        .then((res) => {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&units=metric&appid=e26e112b95e56f37543b35f9b34a27bd`,
                )
                .then((ress) => {
                    const datas: any = [];
                    for (let i = 0; i < 5; i++) {
                        datas.push(ress.data.list[8 * i]);
                    }

                    axios.get(
                        `https://api.unsplash.com/photos/random?page=1&query=${city}&client_id=4zYjUQ09s9hZpE6ZfBRjMlF_gEaGGaYJeBmhWR45rNU`,
                    )
                    .then((rest) => {
                        setweather([rest.data.urls.regular,datas]);
                    });
                });
            
        });
}

// axios
//     .get(
//         `https://api.unsplash.com/photos/random?page=1&query=${city[0]}&client_id=4zYjUQ09s9hZpE6ZfBRjMlF_gEaGGaYJeBmhWR45rNU`,
//     )
//     .then((res) => {
//         let tmp = city;
//         tmp[3] = res.data.urls.regular;
//         setCity(tmp);
//     });
