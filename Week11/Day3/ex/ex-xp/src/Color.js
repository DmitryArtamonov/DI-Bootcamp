import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red'
        };
    }

    shouldComponentUpdate = () => true

    componentDidMount() {
        setTimeout(() => {
            this.setFavoriteColor('yellow');
        }, 2000); // 2 seconds delay
    }

    componentDidUpdate() {
        console.log("after update")
    };

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('in getSnapshotBeforeUpdate prevProps:', prevProps)
        console.log('in getSnapshotBeforeUpdate prevState:', prevState)

    }

    changeColor = () => {
        this.setFavoriteColor('blue');
    }

    setFavoriteColor = (color) => {
        this.setState({ favoriteColor: color });
    }

    render() {
        const { favoriteColor } = this.state;

        return (
            <header>
                <h1>
                    <span>My Favorite Color is </span>
                    <span style={{ fontStyle: 'italic' }}>{favoriteColor} </span>
                </h1>
                <button onClick={this.changeColor}>Change color</button>
            </header>
        );
    }
}


class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    deleteH1 = () =>
    {this.setState({show: false})}

    componentWillUnmount = () => {
        alert('Component unmounted')
    }

    render() {
        console.log('show:', this.state.show)
        if (this.state.show) {
        return (
            <div>
                <h1>Hello World!</h1>
                <button onClick={this.deleteH1}>Delete</button>
            </div>        
            );
        }
    }
}  


export  {Color, Child};
