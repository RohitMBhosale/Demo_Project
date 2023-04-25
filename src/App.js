import logo from './logo.svg';
import './App.css';
import { CardData } from './component1/cardData';
import { Fragment } from 'react';

function App(props) {

  function alertName2() {
    alert("Chris")
  }

  function alertName3() {
    alert("Natasha Ramnof")
  }

  return (
    <Fragment >
      <div className="main-container" >

        <div className='child_container'>
          <CardData
            image="https://tse3.mm.bing.net/th?id=OIP.Sh_OKFkU_TWR15p3ASbnxAHaKX&pid=Api&P=0"
            designation="Iron Man"
            name="Tony Stark"
            jobDiscription="Leading avanger. Greastest of all time"

          />
        </div>
        <div className='child_container'>
          <CardData
            image="https://tse1.mm.bing.net/th?id=OIP.H9CQvmdiXozjOwfnyOF2-QAAAA&pid=Api&P=0"
            designation="Caption America"
            name="Steve Rogers "
            jobDiscription="Caption of team avanger. Greastest of all time"
            onClickfunction={alertName2}
          />
        </div>

        <div className='child_container'>
          <CardData
            image="https://tse4.mm.bing.net/th?id=OIP.GPMNUpjkArjvZeL-Hyq2KgHaO0&pid=Api&P=0"
            designation="Black Widow"
            name="Natasha Ramnof"
            jobDiscription="first women avenger. Greastest of all time"
            onClickfunction={alertName3}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App;
