import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import  WeatherList from './WeatherList';
import WeatherService from '../services/WeatherOpenWeatherMapService';


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


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to My Weather App</h1>
                </header>

                <Search onSearch={this.onSearchHandler}/>

                <br/>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <WeatherList className="5dayweatherforcast" weatherItems={this.state.weatherItems}
                                             weatherCodeToimageUriLookup={WeatherService.weatherCodeToimageUriLookup}/>
                            <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

