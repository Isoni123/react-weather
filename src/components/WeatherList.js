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

        // What I am being passed
        console.log(this.props.weatherItems);

        // Convert the data weatherItem to Component weather item


        const self = this;

        // need to group the results by datetime
        var groups = _.groupBy(this.props.weatherItems, function (item) {
            console.log(item.datetime);
            return moment(item.datetime).startOf('day').format();
        });
        console.log('Groups', groups);



        // Then place the partitioned chunks into the page

        var groupOfWItems = _.map(groups, function (group) {

            var wItems = _.map(group, function (item) {
                return <WeatherItem key={item.id}
                                    city={item.city}
                                    datetime={item.datetime}
                                    icon={item.icon}
                                    description={item.description}
                                    temp={item.temp -273.15}
                                    weatherCodeToimageUriLookup={self.props.weatherCodeToimageUriLookup}/>

                });
            return <div key={group} className='WeatherItemsRow'>{wItems}</div>;

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