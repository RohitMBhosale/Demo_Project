import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'
import { Myfun } from './component/invitation';


function App() {
  return (
    <Fragment>
      <Myfun 
         subject=" Birthday party Invitation"
          email="jaGdish@gmail.com"
           name1=" jaGdish" 
           name2="Ritu "
            name3="Saurabh"
             name4="Kartik" 
             location="Green field Avenue"
      />   
    </Fragment>
  );
}

export default App;