import logo from './logo.svg';
import './App.css';
import {Button} from './stories/Button'
import {Header} from './stories/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          {/* <Button 
            primary
          
          /> */}
          <Button
            backgroundColor="rgba(99,212,33,1)"
            label="Entrar"
            onClick={() => {}}
            primary
          />
      </header>
    </div>
  );
}

export default App;
