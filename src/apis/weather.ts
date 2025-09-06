import axios from "axios";
import type { kakaoGecodeType, openWeatherType } from "../types/weatherType"

export const kakaoAxios = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
  },
});

export const openWeatherAxios = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export async function getCoordsFromAddress(address: string) {
  const res = await kakaoAxios.get<kakaoGecodeType>(
    `/search/address.json?query=${encodeURIComponent(address)}`
  );

  if (res.data.documents.length === 0) {
    throw new Error("좌표를 찾을 수 없음");
  }

  const { x, y } = res.data.documents[0];
  return { lat: parseFloat(y), lon: parseFloat(x) };
}

export async function getWeather(lat: number, lon: number) {
  const res = await openWeatherAxios.get<openWeatherType>(
    `/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric&lang=kr`
  );
  return res.data;
}