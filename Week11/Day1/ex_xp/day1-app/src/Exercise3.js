import React, { Component } from 'react';
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


class Exercise extends Component{
    
    render() {
        return (
            <div >
                <h1 style={style_header}> Excercise 3 </h1>
                <p className='para'>This is a paragraph</p>
                <a href="#">This is a link</a>
                <form>
                    <label for = 'name'>Your name?</label>
                    <input id='name' style={{width:'200px'}}></input>
                </form>
                <img style={{width:'200px'}} src='https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg'></img>
                <ul>The list:
                    <il> il1</il>
                    <il> il2</il>

                
                </ul>
            </div>
        )
    }
}

export default Exercise