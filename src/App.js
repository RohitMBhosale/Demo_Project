import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Btn } from './Button/btn';
import { Benfits } from './Benifits/reactbenifits';

function App() {
  return (
    <Fragment>
    <div className="App">
   <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
    
        <Benfits/>
        <Btn/>
      </header>
    </div>
    </Fragment>

  );
}

export default App;
