import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BolingVerdict(props) {
    return (props.celcius >= 100 ? <p>The water would boil</p> : <p>The water would not boil</p>);
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// tryConvert('abc', toCelsius) returns an empty string or tryConvert('10.22', toFahrenheit) returns '50.396'.
function tryConvert(temperature, convertFunction) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertFunction(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     temperature: ''
        // };
    }

    handleChange(event) {
        // this.setState({
        //     temperature: event.target.value
        // });
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        //const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        );
    }
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }
    
    handleCelciusChange(newTemperature) {
        this.setState({scale: 'c', temperature: newTemperature});
    }

    handleFahrenheitChange(newTemperature) {
        this.setState({scale: 'f', temperature: newTemperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = (scale === 'f' ? tryConvert(temperature, toCelsius) : temperature);
        const fahrenheit = (scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature);

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelciusChange} />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

export default Calculator;