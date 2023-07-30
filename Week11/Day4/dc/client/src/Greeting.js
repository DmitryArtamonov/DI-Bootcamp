import React, { Component } from 'react';

class Greeting extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3000/api/hello');

      if (response.ok) {
        const textData = await response.text();
        this.setState({ data: textData });
      } else {
        console.error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { data } = this.state;

    return (
      <h3>
        {data}
      </h3>
    );
  }
}

export default Greeting;
