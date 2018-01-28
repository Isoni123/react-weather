/**
 * Created by user on 19/01/2018.
 */
import React, {Component} from 'react';
import WeatherItem from './WeatherItem.js';

class WeatherList extends Component {

    componentWillMount() {
        console.log("Weather List is loaded");
    }

    render() {

        // What I am being passed
        console.log(this.props.weatherItems);

        // Convert the data weatherItem to Component weather item


        const self = this;

        var wItems = this.props.weatherItems.map(function (item) {
            return <WeatherItem key={item.id}
                                city={item.city}
                                datetime={item.datetime}
                                icon={item.icon}
                                description={item.description}
                                temp={item.temp -273.15}
                                weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>

        });

        // need to partition the results


        // Then place the partitioned chunks into the grid


        return (
            <div className="container">
                {wItems}
            </div>
        );

    }
}

export default WeatherList;