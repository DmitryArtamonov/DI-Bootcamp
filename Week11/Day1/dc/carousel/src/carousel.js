import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="hong-kong.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="macao.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="japan.webp" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="las-vegas.webp" />
                    <p className="legend">Las Vegas</p>
                </div>

            </Carousel>
        );
    }
};

export default DemoCarousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>