import React, {Component} from 'react';
import {  } from 'react-bootstrap';
import Button from './Button';
import Icon from './Icon';

class Project extends Component {

  render() {
    const {title, img, description, button, icon} = this.props;
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="auto" src={`images/${img}`} alt={title} />
          <div className="card-body">
            <h2>{title}</h2>
            <Icon icon={icon} />
            <p className="card-text" dangerouslySetInnerHTML={{ __html: description}}></p>
            <div className="d-flex justify-content-between align-items-center">
              <Button button={button} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;

