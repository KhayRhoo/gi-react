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

