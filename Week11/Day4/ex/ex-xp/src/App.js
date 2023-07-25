

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomeScreen from "./Components/Home";
import ProfileScreen from "./Components/Profile";
import ShopScreen from "./Components/Shop";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

const getData = async () => {
    try {
      const res = await fetch('https://webhook.site/2090fdb2-e266-4d3a-b19d-235f96a522fa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          name: 'Dmitry',
        },
        body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27
        }),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      console.log(res);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  


function App() {
    return (
        <div className="App">
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/shop">Shop</NavLink>
            </nav>



            <Routes>
                    <Route exact path="/" element={(
                        <ErrorBoundary>
                        <HomeScreen />
                        </ErrorBoundary>
                    )} />

                    <Route exact path="/profile" element={(
                        <ErrorBoundary>
                        <ProfileScreen />
                        </ErrorBoundary>
                    )} />

                    <Route exact path="/shop" element={(
                        <ErrorBoundary>
                        <ShopScreen />
                        </ErrorBoundary>
                    )} />
                    
            </Routes>

            <main>
                <h1> Excercise 2:</h1>
                <PostList></PostList>
                <br>
                    
                </br>
                <h1> Excercise 3:</h1>
                <h2>1</h2>
                <Example1></Example1>
                <h2>2</h2>
                <Example2></Example2>
                <h2>3</h2>
                <Example3></Example3>
                <br>
                    
                </br>
                <h1> Excercise 4:</h1>
                <button onClick={getData}>Click to send data</button>
                <br>
                    
                </br>
                <p>The end</p>


            </main>


        </div>
    );
}

export default App;
