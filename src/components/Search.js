import React, {Component} from 'react';
import './App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: ''
        };


        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleCityChange(event) {

        this.setState({city: event.target.value});
    }


    handleCountryChange(event) {
        this.setState({country: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.props.onSearch) {
            this.props.onSearch(this.state.city, this.state.country);
        }
    }


    render() {

        return (
            <div className="inputform">
                <div className="card w-50 mb-3">
                    <div className="row">
                        <div className="col-sm-12">
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="col-xs-2 text-center">
                                <label >
                                    City Name:
                                </label>
                            </div>
                            <div className="col-xs-3 margin-left">
                                <input type="text" name="city" value={this.state.city} placeholder="Type your city here"
                                       onChange={this.handleCityChange}/>
                            </div>
                            <div className="col-xs-1 text-left">
                                <label>
                                    Country:
                                </label>
                            </div>
                            <div className="col-xs-3 left">
                                <input type="text" name="country" value={this.state.country}placeholder="Type your country here"
                                       onChange={this.handleCountryChange}/>
                            </div>

                            <div className="col-xs-3">
                            <input className="btn btn-primary align-middle" type="submit" name="Submit" value="Submit"/>
                        </div>
                        </form>
                    </div>
                </div>
                    </div>
            </div>
        );
    }
}

export default Search;