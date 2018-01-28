import React, {Component} from 'react';


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


            <div className="col-sm-3">
                <br/>
                <div className="panel panel-default">
                    <div className="panel-body">

                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Find out the weather in a city enter the name the box below:
                                <br/>
                                City Name:
                                <input type="text" name="city" value={this.state.city}
                                       onChange={this.handleCityChange}/>
                                <br/>
                                Country:
                                <input type="text" name="country" value={this.state.country}
                                       onChange={this.handleCountryChange}/>
                            </label>
                            <input className="btn btn-primary" type="submit" name="Submit" value="Submit"/>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}

export default Search;