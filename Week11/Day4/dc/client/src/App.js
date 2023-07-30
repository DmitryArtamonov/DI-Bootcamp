import './App.css';
import Greeting from './Greeting';
import Form from './Form';


function App() {
  return (
    <div className="App">
      <header>
        <Greeting/>
      </header>
      <main>
        <Form/>  
      </main>
    </div>
  );
}

export default App;
