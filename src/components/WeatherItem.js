/**
 * Created by user on 19/01/2018.
 */

import React from 'react';
import Moment from 'react-moment';

class WeatherItem extends React.Component {



    render() {
        return (
            <div className='WeatherItemContainer'>

                {this.props.id}
                {this.props.city}
                <Moment >{this.props.datetime}</Moment>
                {this.props.description}
                {this.props.temp.toFixed(1)}
                <img src={this.props.weatherCodeToimageUriLookup(this.props.icon)}/>
            </div>
        );

    }
}


export default WeatherItem;