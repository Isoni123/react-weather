/**
 * Created by user on 19/01/2018.
 */

import React from 'react';
import Moment from 'react-moment';
var mylocale = require('browser-locale')();

class WeatherSummaryItem extends React.Component {

    onWeatherItemClick()
    {
        if (this.props.onWeatherSummaryItemClick)
        {
            this.props.onWeatherSummaryItemClick(this.props.datetime);
        }
    }

    render() {
        return (
            <div className='WeatherItemContainer' onClick={this.onWeatherItemClick.bind(this)}>
                {this.props.id}
                {this.props.city}
                <Moment locale={mylocale} format ='dddd, DD MMMM' >{this.props.datetime}</Moment>
               <br/>
                {this.props.description}
                <br/>
                {this.props.temp.toFixed(1)}
                <img src={this.props.weatherCodeToimageUriLookup(this.props.icon)}/>
            </div>
        );

    }
}


export default WeatherSummaryItem;