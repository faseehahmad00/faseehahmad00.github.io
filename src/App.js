import './App.css';
import Home from './Home';
import Details from './Details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ marginBottom: "0px" }}>FASEEH AHMAD</h1>
          <p style={{ marginTop: '0px' }}>(Software Developer)</p>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
