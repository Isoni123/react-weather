/**
 * Created by user on 17/01/2018.
 */

import axios from 'axios';

var apiKey = '71387301ae6c2d9cccaf80a776ab4296';

var service = {
    getForecast: function (city, country) {
        var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${apiKey}`;
        return axios.get(url)
            .then(function (response) {
                // Raw data
                console.log(response.data.list);

                // Convert raw data to our weather item format
                var weatherItems = response.data.list.map(function (item) {
                    var id = item.dt;
                    var city = item.cityid;
                    var datetime = item.dt_txt;
                    var dt = item.dt_txt;

                    var main = item.main;
                    var weather = item.weather[0];

                    return {
                        id: id,
                        city:city,
                        datetime: datetime,
                        description: weather.description,
                        temp: main.temp,
                        icon: weather.icon,
                        name: dt,

                    }
                });

                return weatherItems;
            });
    },

    weatherCodeToimageUriLookup(code) {
        return `http://openweathermap.org/img/w/${code}.png`;
    }
};

export default service;
