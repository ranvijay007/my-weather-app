import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
              required
            />
          </div>
          <div className="col-md-3 pt-3">
            <button className="btn btn-warning mt-md-0 text-md-left">
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
