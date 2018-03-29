/**
 * Created by user on 19/01/2018.
 */

import React from 'react';
import Moment from 'react-moment';
var mylocale = require('browser-locale')();

class DetailedWeatherItem extends React.Component {


    render() {
        return (
            <div className='detweather'>

                    <div className=" col-xs-2 ">
                        <Moment locale={mylocale} format='HH:mm'>{this.props.datetime}</Moment>
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


export default DetailedWeatherItem;