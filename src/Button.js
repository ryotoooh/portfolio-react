import React, {Component} from 'react';
import { } from 'react-bootstrap';

class Button extends Component {

  render() {
    const {button} = this.props;
    const buttons = button.map((btn, index) => {
      let img = btn.title === 'View GitHub' ? 'iconmonstr-github-1.svg' : 'iconmonstr-globe-1.svg';
      return (
        <a key={index} 
          // className="btn btn-dark m-1" 
          href={btn.url} 
          // role="button"
          >
            <img src={`icons/${img}`} alt={btn.title} width="36px" className="m-1" />
            {/* {btn.title} » */}
        </a>
      )})
    return (
      <p>
        {buttons}
      </p>
    )
  }
}

export default Button;


