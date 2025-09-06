export type kakaoGecodeType = {
    documents: {
        address_name: string;
        x: string; // 경도 (lon)
        y: string; // 위도 (lat)
    }[];
}

export type openWeatherType = {
    weather: {description: string; icon: string}[];
    main: {temp: number, humidity: number};
    clouds: {all: number};
    wind: {speed: number};
    name: string;
}