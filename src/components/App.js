import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import  DetailedWeather from './DetailedWeather';
import WeatherService from '../services/WeatherOpenWeatherMapService';
import WeatherSummary from './WeatherSummary';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherItems: []
        };

        this.onSearchHandler = this.onSearch.bind(this);


    }

    onSearch(city, country) {

        console.log('A city name  and country was submitted:' + city + country);

        var self = this;

        WeatherService
            .getForecast(city, country)
            .then(function (weatherItems) {
                //// Raw data
                //console.log(response.data.list);
                //
                //// Convert raw data to our weather item format
                //var weatherItems = response.data.list.map(function (item) {
                //    var id = item.dt;
                //    var dt = item.dt_txt;
                //    var main = item.main;
                //    var weather = item.weather[0];
                //
                //    return {
                //        id: id,
                //        description: weather.description,
                //        temp: main.temp,
                //        icon: weather.icon,
                //        name: dt
                //    }
                //});

                self.setState({weatherItems});

            });


    }

    onWeatherSummaryItemClick(datetime) {
        console.log(datetime);
        this.setState({dateSelected: datetime});

    }


    render() {


        return (

            <div className="App">
                <div className="card w-60  mb-3">
                    <h3 className="card-title "> Weather App</h3>

                    <div className="card-body ">
                        <h5 className="card-title">What's the 5 day weather forecast?</h5>
                        <Search onSearch={this.onSearchHandler}/>


                        <div className="row">
                                <div className="card w-60 mb-3">
                                    <div className="col-sm-12">
                                    <WeatherSummary className="dayweathersummary"
                                                    weatherItems={this.state.weatherItems}
                                                    weatherCodeToimageUriLookup={WeatherService.weatherCodeToimageUriLookup}
                                                    onWeatherSummaryItemClick={this.onWeatherSummaryItemClick.bind(this)}
                                                    dateSelected={this.state.dateSelected}/>
                                    </div>
                                    <div className="col-sm-12">
                                        <DetailedWeather className="detailedweather"
                                                         weatherItems={this.state.weatherItems}
                                                         weatherCodeToimageUriLookup={WeatherService.weatherCodeToimageUriLookup}
                                                         dateSelected={this.state.dateSelected}/>
                                    </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;


