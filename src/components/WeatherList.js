/**
 * Created by user on 19/01/2018.
 */
import React, {Component} from 'react';
import WeatherItem from './WeatherItem.js';
import _ from 'lodash';
import moment from 'moment';


class WeatherList extends Component {


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


        // Then place the partitioned chunks into the page

        var groupOfWItems = _.map(weatherItemOfSelectedDay[0], function (timePointInTheDay) {

            // var wItems = _.map(group, function (item) {
            return <WeatherItem key={timePointInTheDay.id}
                                city={timePointInTheDay.city}
                                datetime={timePointInTheDay.datetime}
                                icon={timePointInTheDay.icon}
                                description={timePointInTheDay.description}
                                temp={timePointInTheDay.temp -273.15}
                                weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}
                                dateSelected={self.props.dateSelected}/>

            // return <div key={group} className='WeatherItemsRow'>{wItems}</div>;

        });


        return (
            <div className="container">
                {groupOfWItems}
            </div>
        );

    }
}

export default WeatherList;

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

//        {wItems}