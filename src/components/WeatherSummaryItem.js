/**
 * Created by user on 19/01/2018.
 */
import './App.css';
import React from 'react';
import Moment from 'react-moment';
var mylocale = require('browser-locale')();



class WeatherSummaryItem extends React.Component {

    onWeatherItemClick() {
        if (this.props.onWeatherSummaryItemClick) {
            this.props.onWeatherSummaryItemClick(this.props.datetime);
        }
    }

    render() {
        var classNames = 'weatheritemcontainer';

        if (this.props.isSelected) {
            classNames = 'weatheritemcontainerSelected'
        }

        return (
            <div className={classNames} onClick={this.onWeatherItemClick.bind(this)}>

                <div className="col-xs-2">
                    <Moment locale={mylocale} format='ddd, DD MMMM'>{this.props.datetime}</Moment>
                </div>
                <div className="col-xs-2 ">
                    <img src={this.props.weatherCodeToimageUriLookup(this.props.icon)} alt="weather icon"/>
                </div>
                <div className="col-xs-2 text-align:right">
                    {this.props.temp.toFixed(0)}°C
                </div>
            </div>
        );

    }
}


export default WeatherSummaryItem;

//{this.props.description}