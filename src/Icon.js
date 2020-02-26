import React, {Component} from 'react';
import { } from 'react-bootstrap';

class Button extends Component {

  render() {
    const {icon} = this.props;
    const icons = icon.map((ico, index) => {
      let url;
      switch (ico) {
        case 'Socket.io':
          url = 'socketio-icon.svg'
          break;
        case 'Express.js':
          url = 'expressjs-icon.svg'
          break;
        case 'MongoDB':
          url = 'mongodb-icon.svg'
          break;
        case 'React.js':
          url = 'react-icon.svg'
          break;
        case 'Node.js':
          url = 'nodejs-icon.svg'
          break;
        case 'Heroku':
          url = 'heroku-icon.svg'
          break;
        case 'CSS3':
          url = 'css3.svg'
          break;
        case 'AWS EC2':
          url = 'amazon-web-services-icon.svg'
          break;
        case 'Bootstrap':
          url = 'bootstrap-icon.svg'
          break;
        case 'Docker':
          url = 'docker-tile.svg'
          break;
        case 'JavaScript':
          url = 'javascript.svg'
          break;
        case 'JSON':
          url = 'json-icon.svg'
          break;
        case 'Google Cloud Platform':
          url = 'google-cloud-icon.svg'
          break;
        case 'PM2':
          url = 'pm2-icon.svg'
          break;
        case 'jQuery':
          url = 'jquery-icon.svg'
          break;
        case 'PHP':
          url = 'php-icon.svg'
          break;
        case 'MySQL':
          url = 'mysql-icon.svg'
          break;
        case 'WordPress':
          url = 'wordpress-icon.svg'
          break;
          case 'WooCommerce':
            url = 'WooCommerce_logo.svg'
            break;
        default:
          url=''
      }

      return (
      <img key={index} className="icon mr-1" src={`icons/${url}`} width="32px" alt={ico} />
    )})

    return (
      <p className="text-center">
        {icons}
      </p>
    )
  }
}

export default Button;


