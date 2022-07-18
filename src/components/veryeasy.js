/*Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.*/
import React, {Component} from "react";

class person extends Component {
  
    render() {
      return(
        <div>
          <h1>this.props.name</h1>
          <p>
            this.props.number
            <br/>
            this.props.birthdate
            <br/>
            this.props.location
          </p>
        </div>
      );
    }
  }

export default person;

