import React, { Component } from 'react';



class UserFavoriteAnimals extends Component{
    render() {
        return (
            <ul>
            {this.props.animals.map((animal, index) => <il id={'id'+index}> {animal}</il>)}
            </ul>
        )
    }
}

export default UserFavoriteAnimals