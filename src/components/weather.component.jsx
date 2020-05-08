import React from "react";

const Weather = (props) => {
  function minmaxTemp(min, max) {
    return (
      <h3>
        {min ? <span className="px-4">{min}&deg;</span> : null}
        {max ? <span className="px-4">{max}&deg;</span> : null}
      </h3>
    );
  }
  return (
    <div className="container text-light">
      <div className="cards pt-4">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={"wi " + props.weatherIcon + " display-1"}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-4">{props.temp_description}</h4>
      </div>
    </div>
  );
};

export default Weather;
