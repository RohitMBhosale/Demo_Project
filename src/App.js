import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Benifits of using React ...</h1>
        <ol>
          <li>Component based Architecture</li>
          <li>Virtual DOM of efficient update</li>
          <li>Rich ecosystem and community</li>
          <li>Cross-Platform development</li>
          <li>Strong Community Support</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
