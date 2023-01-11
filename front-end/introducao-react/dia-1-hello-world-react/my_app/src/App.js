import React from 'react';
import './App.css';


const h2 = <h2 className='hello-world'>Hello World!!</h2>
const h3 = <h3 className='hello-world'>Hello World!!!</h3>

function Header() {
  return (
    <header>
      <h1 className="hello-world">Hello world!</h1>
    </header>
  )
}
function App() {
  return (
    <>
    <Header />
      { h2 }
      { h3 }
      <p>Este é o meu primeiro app react</p>
    </>
  );
}

export default App;
