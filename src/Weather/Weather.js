import React,{useState, useEffect} from 'react'
import './Weather.css'

const Weather = () => {
    const [weather, setWeather] = useState("Mumbai")
    const [weatherInfo, setWeatherInfo] = useState({})
    const { temp, humidity, pressure,name,speed,country, state, timezone, icon, description } = weatherInfo;
    const latestDate = new Date().toLocaleDateString();
    const getWeatherData = async () => {
        try{
            const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=9a9a3d4c17bee71a6bfa91544f6389d3&units=metric`;
            const response = await fetch(baseUrl)
            const data = await response.json()
            console.log(data)
            const { temp, humidity, pressure } = data.main;
            const { name } = data;
            const { speed } = data.wind;
            const {country, state} = data.sys;
            const {icon, description} = data.weather[0];
            const {timezone} = data;
            const weatherAllData = {
                temp, humidity, pressure,name,speed,country, state, timezone,icon, description
            }
            setWeatherInfo(weatherAllData)
            setWeather('')
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getWeatherData()
    }, [])
    return (
        <div className="weather-wrap">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="weather-container">
                            <article className="widget">
                                <div className="mb-3 row w-100 justify-content-center">
                                    <div className="col-10">
                                        <input type="search" className="form-control" value={weather} onChange={(e)=>setWeather(e.target.value)} placeholder="Serach your City"/>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary mb-2" onClick={getWeatherData}>Submit</button>
                                    </div>
                                </div>
                                <div className="weatherIcon">
                                    <h3><img style={{width:'70px'}} src= {`https://openweathermap.org/img/wn/${icon}.png`} /></h3>
                                    <h3>{description}</h3>
                                </div>
                                <div className="weatherInfo">
                                    <div className="temperature"><span>{temp}&deg;</span></div>
                                    <div className="description">
                                        <div className="weatherCondition">{humidity}</div>
                                        <div className="place">{name} {country}</div>
                                    </div>
                                </div>
                                <div className="date">{latestDate}</div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;
