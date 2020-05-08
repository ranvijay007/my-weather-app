import React from "react";
import "./App.css";
import Weather from "./components/weather.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/form.component";
import "./components/form.style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
    };
    //this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }
  clear() {
    this.setState({ error: false, notFound: false });
  }
  calcelsius(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }
  get_WeatherIcon(icon, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeID >= 700 && rangeID <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    //console.log(city);
    //const city = "Ranchi";
    //const country = "India";
    const api_call = await fetch(
      " https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "," +
        country +
        "&appid=9d44042f10bae751a871e91407cb724c"
    );
    const response = await api_call.json();
    if (response.cod === "404") {
      alert(response.message);
    } else {
      this.setState({
        city: response.name + "," + response.sys.country,
        //country: response.sys.country,
        celsius: this.calcelsius(response.main.temp),
        temp_max: this.calcelsius(response.main.temp_max),
        temp_min: this.calcelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }
  };
  onChangeError() {
    this.setState({ error: false });
  }
  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          temp_description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
