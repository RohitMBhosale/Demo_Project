
import './App.css';
import OneCard from './Atom/card';



function App() {


  const userOne = {
    image : 'https://tse4.mm.bing.net/th?id=OIP.NVeJSoov8AfGPOiclLG76QHaEK&pid=Api&P=0' ,
    name : 'Tony Stark' ,
    role : 'IRON MAN' ,
   
  }
  const userTwo = {
    image : 'https://tse4.mm.bing.net/th?id=OIP.vUcygjS4pvQu0Uqeg4uNYwHaEo&pid=Api&P=0' ,
    name : 'Steve Rogers' ,
    role : 'CAPTION AMERICA' ,
   
  }
  
  const userThree = {
    image : 'https://tse4.mm.bing.net/th?id=OIP.aEnnXp8nW0pY1rk4ZHjutgHaEK&pid=Api&P=0' ,
    name : 'Bruce Banner' ,
    role : 'HULK' ,
   
  }
  
  const userFour = {
    image : 'https://tse2.mm.bing.net/th?id=OIP.SxG3-Qjx9rAPp1rRpkzr5gHaEZ&pid=Api&P=0' ,
    name : 'Natasha Ramanof' ,
    role : 'BLACK WIDOW' ,
   
  }
  
  const userFive = {
    image : 'https://tse4.mm.bing.net/th?id=OIP.fDDStxcsvlCBdxo7gNR-LgHaHa&pid=Api&P=0' ,
    name : 'Wonda Maximoff' ,
    role :'WONDA VISION' ,
   
  }
  
  const userSix = {
    image : 'https://tse4.mm.bing.net/th?id=OIP.Gu7gnOEgJRheZAioZiV-egHaEl&pid=Api&P=0' ,
    name : 'Thor' ,
    role : 'GOD OF THUNDER' ,
   
  }
  
  const userSeven = {
    image : 'https://tse2.mm.bing.net/th?id=OIP.Y9KvDwlm15ZP2u02b3SE2QHaFj&pid=Api&P=0' ,
    name : 'Loki' ,
    role : 'GOD OF MISCHIEF' ,
   
  }
  
  const userEight= {
    image : 'https://tse2.mm.bing.net/th?id=OIP.hkPjFXSIYQ5t7DHg0fWvPAHaDt&pid=Api&P=0' ,
    name : 'Peter Parker' ,
    role : 'SPIDERMAN' ,
   
  }
  
  const userNine = {
    image : 'https://tse1.mm.bing.net/th?id=OIP.yQTQVF6WDkhv1PCamcsa6gHaFj&pid=Api&P=0' ,
    name : ' Dr. Steven Strange' ,
    role : 'DOCTOR STRANGE' ,
   
  }
   
  const userTen = {
    image : 'https://tse4.explicit.bing.net/th?id=OIP.X57HHroehr7fT3jlre41xQHaE8&pid=Api&P=0' ,
    name : 'Thanos' ,
    role : 'INVINSIBLE VILLEN' ,
   
  }
  
  
  
  return (


<div className="parent1">
  <img className='img1' src='https://tse2.mm.bing.net/th?id=OIP.meZnklAGA9HE68Z_EEz_MgHaEK&pid=Api&P=0' alt=""/>

        <h1>MARVEL SUPERHEROS</h1>

<div className="App">
          <OneCard
              cardDetail ={userOne}
          />
            <OneCard
              cardDetail ={userTwo}
          />
            <OneCard
              cardDetail ={userThree}
          />
            <OneCard
              cardDetail ={userFour}
          />
            <OneCard
              cardDetail ={userFive}
          />
            <OneCard
              cardDetail ={userSix}
          />
            <OneCard
              cardDetail ={userSeven}
          />
            <OneCard
              cardDetail ={userEight}
          />
            <OneCard
              cardDetail ={userNine}
          />
            <OneCard
              cardDetail ={userTen}
          />
    </div>

    </div>


  );
}

export default App;
