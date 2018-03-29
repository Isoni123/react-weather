/**
 * Created by user on 19/01/2018.
 */
import React, {Component} from 'react';
import DetailedWeatherItem from './DetailedWeatherItem.js';
import _ from 'lodash';
import moment from 'moment';


class DetailedWeather extends Component {


    componentWillMount() {
        console.log("Weather List is loaded");
    }


    render() {

        if (!this.props.dateSelected) {
            return <span/>;
        }



        // What I am being passed
        console.log(this.props.weatherItems);

        // Convert the data weatherItem to Component weather item


        const self = this;


        const selectedDate = new moment(this.props.dateSelected).format("YYYY-MM-DD");

        // need to group the results by datetime
        var groupOfWeatherItemByDay = _.groupBy(this.props.weatherItems, function (item) {
            console.log(item.datetime);
            return moment(item.datetime).startOf('day').format();
        });
        console.log('Groups', groupOfWeatherItemByDay);


        var weatherItemOfSelectedDay = _.filter(groupOfWeatherItemByDay, function (group, key) {
            const groupsDate = new moment(key).format("YYYY-MM-DD");
            return (groupsDate === selectedDate);
        });
        console.log('fullweatherinfo', weatherItemOfSelectedDay)


        var groupOfWItems = _.map(weatherItemOfSelectedDay[0], function (timePointInTheDay) {


            return <DetailedWeatherItem

                key={timePointInTheDay.id}
                city={timePointInTheDay.city}
                datetime={timePointInTheDay.datetime}
                icon={timePointInTheDay.icon}

                temp={timePointInTheDay.temp - 273.15}
                weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>

        });


        return (
            <div >
                {groupOfWItems}
            </div>
        );

    }
}

export default DetailedWeather;

//
// groupOfWItems.filter((wItem) => wItem.datetime === "12:00:00")
//
//var wItems = this.props.weatherItems.map(function (item) {
//    return <WeatherSummaryItem key={item.id}
//                        city={item.city}
//                        datetime={item.datetime}
//                        icon={item.icon}
//                        description={item.description}
//                        temp={item.temp -273.15}
//                        weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>
//
//});

// {wItems}