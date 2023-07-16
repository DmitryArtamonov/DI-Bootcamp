import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';


import './App.css';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  
  return (
    <div className="App">
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} better with JSX</p>

      <h3>{user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals}></UserFavoriteAnimals>
      <Exercise></Exercise>
    </div>
  );
}

export default App;
