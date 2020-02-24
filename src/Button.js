import React, {Component} from 'react';
import { } from 'react-bootstrap';

class Button extends Component {

  render() {
    const {button} = this.props;
    const buttons = button.map((btn, index) => (
      <a key={index} 
         className="btn btn-secondary mr-1" 
         href={btn.url} 
         role="button">{btn.title} »</a>
    ))
    return (
      <p>
        {buttons}
      </p>
    )
  }
}

export default Button;


