import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/greetings/random_greeting">Random Greeting</Link>
              </li>
            </ul>
          </nav>

          <Route path="/greetings/random_greeting" component={Greeting} />
        </div>
      </Router>
    </>
  );
}

export default App;
