/**
 * Created by user on 19/01/2018.
 */

import React from 'react';
import Moment from 'react-moment';
var mylocale = require('browser-locale')();

class WeatherItem extends React.Component {


    render() {
        return (
            <div className='WeatherItemContainer'>
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


export default WeatherItem;