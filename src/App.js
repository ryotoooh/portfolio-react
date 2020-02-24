import React, {Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          title: 'Travel Agent Kabuki Node',
          img: 'Travel-Agent-Kabuki.png',
          description: 'A travel-agency web site project using Node, Express and MongoDB. The purposes of this project are understanding a server-side Javascript - Node, and a database - MongoDB as well as GET, POST, PUT and DELETE requests. Basically, transformed from the PHP and MySQL version. This is an ongoing project. Not all functions are completed.',
          icon: [
            'MongoDB',
            'Express.js',
            'Node.js',
            'CSS3',
            'Heroku'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://travel-agent-kabuki-node.herokuapp.com/'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/travel-agent-kabuki-node/'
            }
          ]
        }, {
          title: 'Todo List React',
          img: 'Todo-List-React.png',
          description: 'A single page web application created by Node.js, Express.js, React.js and MongoDB. This is a part of projects from <a href="https://www.udemy.com/the-advanced-web-developer-bootcamp/">The Advanced Web Developer Bootcamp</a> by Colt Steele. The list is lively updated via socket.io.',
          icon: [
            'Socket.io',
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js',
            'Heroku'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://todo-list-react-ryotoooh.herokuapp.com/'
            }
          ]
        }, {
          title: 'Weather App Node',
          img: 'Weather-App.png',
          description: 'A simple weather API Node web application. The purposes of this project are understanding Web API service and JSON data. Enter a city name to a input field to show temperature (in degree Celsius) and show a drink icon depends on it\'s temperature.',
          icon: [
            'Express.js',
            'Node.js',
            'JSON',
            'Heroku'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://weather-app-node-2.herokuapp.com/'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/weather-app-node'
            }
          ]
        }, {
          title: 'Guess Flag Game',
          img: 'Guess-Flag-Game.png',
          description: 'Built a single page application fetching an API to show a country flag to guess its name',
          icon: [
            'React.js',
            'Bootstrap',
            'Docker',
            'Google Cloud Platform'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://guess-flag-game.ryotoooh.ninja/'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/guess-flag-game/'
            }
          ]
        }, {
          title: 'Todo List jQuery',
          img: 'Todo-List-jQuery.png',
          description: 'A single page web application created by jQuery, Node.js, Express.js and MongoDB. This is a part of projects from <a href="https://www.udemy.com/the-advanced-web-developer-bootcamp/">The Advanced Web Developer Bootcamp</a> by Colt Steele.',
          icon: [
            'jQuery',
            'MongoDB',
            'Express.js',
            'Node.js',
            'PM2',
            'AWS EC2'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://todo-list-jquery.ryotoooh.ninja/'
            }
          ]
        }, {
          title: 'Camera Store',
          img: 'Camera-Store.png',
          description: 'A simple static Node and Express website. The purposes of this project are deploying simple static files - image and style sheet, and understanding GET and POST requests through API. Original project is made by PHP.',
          icon: [
            'Express.js',
            'Node.js',
            'Heroku'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://camera-store-node.herokuapp.com/'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/camera-store/'
            }
          ]
        }, {
          title: 'Travel Agent Kabuki PHP',
          img: 'Travel-Agent-Kabuki.png',
          description: 'A travel-agency web site project using PHP and MySQL. The purposes of this project are understanding a basic server-side language - PHP, and a relational database - MySQL as well as GET, POST, PUT and DELETE requests.',
          icon: [
            'PHP',
            'MySQL',
            'CSS3'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'http://jupiter.csit.rmit.edu.au/~s3769450/php/travel-agent/'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/travel-agent-kabuki/'
            }
          ]
        }, {
          title: 'Island Travel',
          img: 'Island-Travel.png',
          description: 'CMS website with an e-commerce functionality by WooCommerce. Optimising SEO.',
          icon: [
            'WordPress',
            'WooCommerce'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://hisanabe1.it5a.com.au/'
            }
          ]
        }, {
          title: 'myGallery',
          img: 'myGallery.png',
          description: 'Using/exprementing Bootstap and Carousel to show photos.',
          icon: [
            'Bootstrap'
          ],
          button: [
            {
              title: 'Go Webpage',
              url: 'https://ryotoooh.github.io/myGallery/gallery.html'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/ryotoooh.github.io/'
            }
          ]
        }, {
          title: 'myList',
          img: 'myList.png',
          description: 'A very first project to understand CSS, Javascript, DOM and HTML.',
          icon: [
            'JavaScript'
          ],
          button: [
            {
              title: 'Go Webpage',
              url: 'https://ryotoooh.github.io/myList/list.html'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/ryotoooh.github.io/'
            }
          ]
        }, {
          title: 'simpleCalculator',
          img: 'simpleCalculator.png',
          description: 'Again, a very simple project to understand CSS, Javascript, DOM and HTML.',
          icon: [
            'JavaScript'
          ],
          button: [
            {
              title: 'Go Webpage',
              url: 'https://ryotoooh.github.io/simpleCalculator/calc.html'
            }, {
              title: 'View GitHub',
              url: 'https://github.com/ryotoooh/ryotoooh.github.io/'
            }
          ]
        }
      ]
    }
  }


  render() {
    const {project} = this.state;
    const projects = project.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        img={project.img}
        description={project.description}
        icon={project.icon}
        button={project.button}
        />
    ))

    return (
      <div className="App">
        <Container>
          <Row>
            {projects}
          </Row>
          <hr />
        </Container>
      </div>
    )
  }
}

export default App;