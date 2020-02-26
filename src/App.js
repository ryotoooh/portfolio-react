import React, {Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          title: 'Kabuki Travel',
          img: 'Travel-Agent-Kabuki.png',
          description: 'MEN stack CMS. Built REST API with Node.js, Express and MongoDB. Vanila CSS for responsive design and EJS template engine. Implemented a Form input validation on server side, user authentiation and image file uploading. Complied ES6 syntax using Babel and deployed to Heroku server.',
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
          title: 'Todo List',
          img: 'Todo-List-React.png',
          description: 'MERN Full-stack Todo List. Built REST API with Node.js, Express and MongoDB. React front-end and state management. Real time list update by Socket.io. Thanks to <a href="https://www.udemy.com/the-advanced-web-developer-bootcamp/" class="text-muted">The Advanced Web Developer Bootcamp</a> by Colt Steele.',
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
          title: 'Weather App',
          img: 'Weather-App.png',
          description: 'Built API to fetch Open Weather API with Node.js and Express. EJS template engine to update responce.<br /><br />Type a city name and hite enter. A drink icon - beer mug or tea cup - and temperature will be shown.',
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
          description: 'Fetching API, and state management and score tracking by React. Responsive styling with Bootstrap. Deployed to Google Cloud Platform via Docker. DNS management with Cloudflare.<br /><br />Select a country name out of four selection for the flag shown above.',
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
          title: 'Todo List',
          img: 'Todo-List-jQuery.png',
          description: 'Built REST API with Node.js, Express and MongoDB. jQuery for front-end. Deployed to Amazon EC2 as PM2 instance. Thanks to <a href="https://www.udemy.com/the-advanced-web-developer-bootcamp/" class="text-muted">The Advanced Web Developer Bootcamp</a> by Colt Steele.',
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
          description: 'Built multiple-page webapplication with Node.js and Express. Image file upload funcion and routing.',
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
          title: 'Yelp Camp',
          img: 'Yelp-Camp.png',
          description: 'MEN stack CMS. Built REST API with Node.js, Express and MongoDB. Bootstrap for responsive design and EJS template engine. Implemented a Form input validation on client side, user authentiation and Google Map API. Developed mongoose schema to track posts associating with a user.',
          icon: [
            'MongoDB',
            'Express.js',
            'Node.js',
            'Bootstrap',
            'Heroku'
          ],
          button: [
            {
              title: 'Go Website',
              url: 'https://yelp-camp-ryotoooh.herokuapp.com/'
            }
          ]
        }, {
          title: 'Kabuki Trabel',
          img: 'Travel-Agent-Kabuki.png',
          description: 'Built REST API with PHP and MySQL. Vanila CSS for responsive design. Implemented a Form input validation on server side, user authentiation and image file uploading.',
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
          description: 'Built CMS with WordPress. Implemented an e-commerce function via WooCommerce plugin. Optimised SEO.',
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
          title: 'My Gallery',
          img: 'myGallery.png',
          description: 'Built responsive photo gallery with Bootstap Carousel.',
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
          title: 'My List',
          img: 'myList.png',
          description: 'Built a DOM manipulated simple list with vanila HTML, CSS and JavaScript.',
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
          title: 'Simple Calculator',
          img: 'simpleCalculator.png',
          description: 'Built a DOM manipulated simple calculator with vanila HTML, CSS and JavaScript.',
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