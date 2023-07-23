import './App.css';
import {useState} from 'react'
import Language from './Language';

function App() {

  const [languages, setLanguages] = useState([
    {id: 1, name: "Php", votes: 0},
    {id: 2, name: "Python", votes: 0},
    {id: 3, name: "JavaSript", votes: 0},
    {id: 4, name: "Java", votes: 0}
  ])

  const vote = (e) => {

    setLanguages (languages.map((language) => 
      e.target.id == language.name ? {...language, votes:language.votes + 1  } : language
    ))
  }


  return (
    <div className="App">
      {languages.map((language) => 
        <Language key={language.id} language={language.name} votes={language.votes} voteFunc={vote}/>
      )}
     
    </div>
  );
}

export default App;
