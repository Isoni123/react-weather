/**
 * Created by user on 19/01/2018.
 */
import React, {Component} from 'react';
import WeatherSummaryItem from './WeatherSummaryItem.js';
import _ from 'lodash';
import moment from 'moment';
import Search from './Search';

class WeatherSummary extends Component {

    constructor(props) {
        super(props);
        //if (this.props.onClick) {
        //
        //
        //}


    }

    componentWillMount() {
        console.log("Weather List is loaded");
    }

    render() {
        // What I am being passed
        console.log(this.props.weatherItems);

        // Convert the data weatherItem to Component weather item


        const self = this;

        // need to group the results by day
        var groupsByDay = _.groupBy(this.props.weatherItems, function (item) {
            console.log(item.datetime);
            return moment(item.datetime).startOf('day').format();
        });
        console.log('Groups', groupsByDay);


        var summaryWeatherPerDay = _.map(groupsByDay, function (group) {

            var numberOfItems = group.length;
            var middleItemIndex = Math.floor(numberOfItems / 2);

            var summaryWeather = _.nth(group, middleItemIndex); // time points
            console.log('summary', summaryWeather);

            return <WeatherSummaryItem key={summaryWeather.id}
                                       city={summaryWeather.city}
                                       datetime={summaryWeather.datetime}
                                       icon={summaryWeather.icon}
                                       description={summaryWeather.description}
                                       temp={summaryWeather.temp -273.15}
                                       weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}
                                       onWeatherSummaryItemClick={self.props.onWeatherSummaryItemClick}
            />
        });

        return (
            <div className="container">
                {summaryWeatherPerDay}
            </div>
        );

    }
}

export default WeatherSummary;


//
//var wSummary = _.map(summaryWeather, function (item) {
//    return <WeatherSummaryItem key={item.id}
//                        city={item.city}
//                        datetime={item.datetime}
//                        icon={item.icon}
//                        description={item.description}
//                        temp={item.temp -273.15}
//                        weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>
//});
//
//

//   return <span/>;
/*
 var WeatherItemsByDay =this.props.weatherItems.filter ((item) => this.props.weatherItems[3])
 .map(function (item){
 return<WeatherSummaryItem key={item.id}
 datetime={item.datetime}
 temp={item.temp -273.15}
 icon={item.icon}
 weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>
 });

 */